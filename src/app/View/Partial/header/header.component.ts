import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { resolve } from 'q';
import { Match } from '../../../Model/match';
import { MatchService } from '../../../Service/Match/match.service';
import { Globals } from '../../../Model/global';
import { SharedService } from 'src/app/Service/shared.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private reportData: any;
    public userDetails: any;
    public user_name: any;
    public LastLoginDate: any;
    public currentDate: Date;
    public userId: string;
    public Balance: any;
    public Liability: any;
    public loginData: { userId: string; sessionId: any; lastLogin: any };
    public lastLogin: any;
    public sessionId: any;
    public isshowMenu: any;
    public showsubmenu: any;
    public showsubmenu1: any;
    public searchText_len: any;
    public searchText: any;
    public searchResult: any;
    public matchName: any;
    public notificationList: any;
    public isshowdate: boolean;
    marqueText: any;
    notificationListCount: any;
    logo;
    constructor(public router: Router, private dataSharing: SharedService, public matchModel: Match, private matchService: MatchService, public global: Globals) {
    }
    ngOnInit() {
        this.isshowMenu = false;
        this.marqueText = this.matchModel.marqueText;
        this.logo = this.global.Url + 'uploads/logo.png';
        this.timerRun();
        this.isshowdate = false;
        this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
        this.user_name = this.userDetails.user_name;
        this.LastLoginDate = this.userDetails.lastLoginTime;
        this.userId = this.userDetails.user_id;
        this.sessionId = this.userDetails.lgnstatus;
        this.lastLogin = this.userDetails.last_login_id;
        this.showsubmenu = false;
        this.showsubmenu1 = false;
        this.loginData = { userId: this.userId, sessionId: this.sessionId, lastLogin: this.lastLogin };
        this.getChipDatabyId();
        this.getAllNotificationCount();
    }
    addMenuClass() {
        const menu = document.getElementById('showhideMenu');
        menu.classList.toggle('show');
    }
    gotoReports(path) {
        this.router.navigate(['/subdashboard/' + path]);
    }
    goToChangePass() {
        this.router.navigate(['/subdashboard/changePassword']);
    }
    goToChipHistory() {
        this.router.navigate(['/subdashboard/ChipHistory'], { queryParams: { userId: this.userId, type: 3, transaction_type: 1 } });
    }
    showsubmenus() {

        if (this.showsubmenu == false) {
            this.showsubmenu = true;
        } else {
            this.showsubmenu = false;

        }
    }
    showsubmenus1() {

        if (this.showsubmenu1 == false) {
            this.showsubmenu1 = true;
        } else {
            this.showsubmenu1 = false;

        }
    }

    timerRun() {
        this.currentDate = new Date();
        if (this.router.url.split('?')[0] != '/login') {
            setTimeout(() => resolve(this.timerRun()), 1000);
        }
    }
    fetchUsers() {

        this.searchText_len = this.searchText.trim().length;
        if (this.searchText_len > 0) {
            this.reportData = this.searchText;
            this.matchService.searchMatchList(this.reportData).subscribe((data) => {
                this.searchResult = data.data;
            });
        }
    }

    searchboxClicked($event) {
        $event.stopPropagation();
    }

    document() {
        this.searchResult = {};
        this.searchText = '';
    }

    CallSelectedItem(series) {
        if (series != '') {
            // this.document();
            localStorage.setItem('selectedMatch', JSON.stringify(series));
            //   this.router.navigate(['dashboard/home']);
            this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { MatchId: series.match_id, SportId: series.sport_id } });
            this.searchResult = [];
            this.searchText = '';
        }
    }


    gotoHome() {
        // this.router.navigate(['dashboard/home'], { queryParams: { SportId: '4' } });
        this.dataSharing.setToHome();
        this.router.navigate(['dashboard/in-play']); // New Home 
    }

    getChipDatabyId() {
        this.matchService.getChipDatabyId().subscribe((data) => {
            if (!data.error) {
                if (data.data != undefined) {

                    this.Balance = data.data.balance;
                    this.Liability = data.data.liability;
                    if (data.data.lock_user == '1' || data.data.close_account == '1' || data.data.is_online == '0') {
                        this.logout();
                    }
                }

            } else if (data.code == 412) {
                localStorage.clear();
                window.location.reload();

                this.router.navigate(['login']);

            }

        }, (err) => {

            if (err.code == 412) {
                this.router.navigate(['login']);

            }

            if (this.router.url.split('?')[0] != '/login') {
                setTimeout(() => resolve(this.getChipDatabyId()), 4000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] != '/login') {
                    setTimeout(() => resolve(this.getChipDatabyId()), 4000);
                }
            });
    }

    logout() {
        this.matchService.logout().subscribe((result) => {
            this.matchService.token = null;
            localStorage.clear();
            this.router.navigate(['login']);
            window.location.reload();

        }, (err) => {

        });
    }

    getAllNotification() {
        var param = { "isReadStatus": 1 }
        this.matchService.getAllActiveNotifications(param).subscribe(response => {
            if (!response.error) {
                this.notificationList = response.data;
            }
        }, error => {
        });
    }
    getAllNotificationCount() {
        var param = { "isReadStatus": 0 }
        this.matchService.getAllActiveNotifications(param).subscribe(response => {
            if (!response.error) {
                this.notificationListCount = (response.data.filter(t => t.is_read == '0')).length;
            }
        }, error => {
            if (this.router.url.split('?')[0] != 'login') {
                setTimeout(() => resolve(this.getAllNotificationCount()), 8000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] != 'login') {
                    setTimeout(() => resolve(this.getAllNotificationCount()), 8000);
                }
            });
    }

}
