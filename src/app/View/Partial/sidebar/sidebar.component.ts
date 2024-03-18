import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../../Service/Match/match.service';
import { Match } from '../../../Model/match';
import { SharedService } from 'src/app/Service/shared.service';
import { Subscription } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { SSPTokenService } from 'src/app/Service/SSP/ssp.token.service';



@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    @Output() setItemEvent = new EventEmitter();

    private userDetails: any;
    private userId: any;
    private lastLogin: any;
    private sessionId: any;
    private loginData: {};
    public FsportData: any;
    GetSeriesData: any;
    public selectedSport: any;
    GetMatchData: any;
    private accordionLv2: string;
    private showDisplay: boolean;
    GetSeriesDatalength: any;
    GetMatchDatalength: any;
    firstLevel: any;
    SecondLevl: any;
    thirdLevlActive: any;
    SportId;
    FromHeader;
    staticCup;
    ValCrick;
    SelectedSport;

    private unSubstoHome: Subscription;
    constructor(private router: Router, private matchservice: MatchService, public matchModel: Match,
        public route: ActivatedRoute, private dataSharing: SharedService) {
    }

    ngOnInit() {
        this.staticCup = [
            /* {
            'name': 'IPL',
            'match_id': '28127348'
        } */
        ];

        this.GetSoprtName();
        this.firstLevel = true;
        this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
        this.userId = this.userDetails.user_id;
        this.sessionId = this.userDetails.lgnstatus;
        this.lastLogin = this.userDetails.last_login_id;
        this.loginData = { userId: this.userId, sessionId: this.sessionId, lastLogin: this.lastLogin };

        // Active Listener when Home route triggered. 
        this.unSubstoHome = this.dataSharing.getToHome().subscribe(res => {
            this.goToInplay();
        })
        this.route.queryParams.subscribe(params => {
            this.SportId = params['SportId'];
            this.ValCrick = params['ValCrick'];
            this.FromHeader = params['FromHeader'];
            localStorage.setItem('SportId', (this.SportId) ? this.SportId : 4);

            if (localStorage.getItem('Sportname') == 'Cricket' && this.ValCrick == 4) {
                this.getSeriesLstCricket();
            }
            if (this.FromHeader == 1) {
                this.SportId = 4;
                localStorage.setItem('SportName', 'Cricket');
                this.GetSoprtName();
            }


        });
    }
    ngOnDestroy() {
        if (this.unSubstoHome) {
            this.unSubstoHome.unsubscribe();
        }
    }
    getSeriesLstCricket() {

        var SportData = {
            'sport_id': 4,
            limit: null,
            pageno: null,
            series_name: null,
            status: 1,

        };
        this.matchservice.getSeriesLst(SportData).subscribe((data) => {
            this.GetSeriesData = data.data.list;
            this.firstLevel = false;
            this.SecondLevl = true;
            this.thirdLevlActive = false;
            this.GetSeriesDatalength = this.GetSeriesData.length;
            this.matchModel.SportName = 'Cricket';
            localStorage.setItem('Sportname', 'Cricket');
            localStorage.setItem('CricketData', localStorage.getItem('CricketData'));
            this.SelectedSport = JSON.parse(localStorage.getItem('CricketData'));
            //  this.router.navigate(['dashboard/home'], {queryParams: {SportId: displaydata.sport_id}});
        }, (err) => {

        });
    };


    GetSoprtName() {
        this.FsportData = [];
        let param = {
            status: 1
        };
        this.matchservice.GetSoprtName(param).subscribe((data) => {
            this.FsportData = data.data.list;
            console.log(this.FsportData + "Json response")
            localStorage.setItem('Sportname', 'Cricket');
            localStorage.setItem('CricketData', JSON.stringify(data.data.list[0]));
            localStorage.setItem('sportData', JSON.stringify(data.data.list[0]));

            this.firstLevel = false;
            this.SecondLevl = false;
            this.thirdLevlActive = false;
        }, (err) => {

        });
    }

    gotoUserMatchOddsPage(Match) {
        console.log("..................................hello,kM", Match);

        localStorage.setItem('selectedMatch', JSON.stringify(Match));
        this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: Match.match_id } });
    }

    getSeriesLst(displaydata) {
        var SportData = {
            'sport_id': '' + displaydata.sport_id,
            limit: null,
            pageno: null,
            series_name: null,
            status: 1,

        };
        this.matchservice.getSeriesLst(SportData).subscribe((data) => {
            this.GetSeriesData = data.data.list;
            this.firstLevel = false;
            this.SecondLevl = true;
            this.thirdLevlActive = false;
            this.GetSeriesDatalength = this.GetSeriesData.length;
            this.matchModel.SportName = displaydata.name;
            localStorage.setItem('Sportname', displaydata.name);
            localStorage.setItem('sportData', JSON.stringify(displaydata));
            this.SelectedSport = JSON.parse(localStorage.getItem('sportData'));
            this.router.navigate(['dashboard/home'], { queryParams: { SportId: displaydata.sport_id } });
        }, (err) => {

        });
        //}
    }

    setCricketId() {
        this.router.navigate(['dashboard/home'], { queryParams: { SportId: '4' } });
    }

    getMatchLst(sportid, seriesid) {

        // Reseting series varaible for cups.
        if (this.selectedSport.sport_id === 'cup') {
            this.GetSeriesData = null;
        }

        if (sportid === 'cup') {
            this.firstLevel = false;
            this.SecondLevl = true;
            this.thirdLevlActive = false;
            this.matchModel.SportName = this.selectedSport.name;
            localStorage.setItem('Sportname', this.selectedSport.name);
            localStorage.setItem('SportName', this.selectedSport.name);
            localStorage.setItem('sportData', JSON.stringify({ sport_id: sportid, name: this.selectedSport.name }));
            this.SelectedSport = JSON.parse(localStorage.getItem('sportData'));
            this.router.navigate(['dashboard/home'], { queryParams: { SportId: sportid } });
        }
        else {
            var matchdata = {
                'sport_id': '' + sportid,
                'series_id': seriesid,
            };
            this.matchservice.getUserFavouriteMatchLst(matchdata).subscribe((data) => {
                this.GetMatchData = data.data;
                this.thirdLevlActive = true;
                this.SecondLevl = false;
                this.GetMatchDatalength = this.GetMatchData.length;
                this.router.navigate(['dashboard/home'], { queryParams: { Seriesid: seriesid, SportId: sportid } });

            }, (err) => {

            });
        }
    }

    previous() {
        this.showDisplay = !this.showDisplay;
        this.router.navigate(['dashboard/home'], { queryParams: { Seriesid: 0, SportId: 4 } });

        this.GetSoprtName();
    }

    previous2(accordionLv2) {

        this.accordionLv2 = '';
        this.getSeriesLst(accordionLv2);
    }

    reset() {
        this.showDisplay = !this.showDisplay;
    }

    addMenuClass() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.toggle('menumobile');
    }

    gotoFavorite() {
        this.addMenuClass();
        this.router.navigate(['/dashboard/Favourite']);
    }
    goToInplay() {
        this.SecondLevl = false;
        this.addMenuClass();
        this.reset();
        this.router.navigate(['dashboard/in-play']);
    }

}


