import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Match } from '../../../Model/match';
import { LoginserviceService } from '../../../Service/User/loginservice.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatchService } from '../../../Service/Match/match.service';
import { resolve } from 'q';
import { Globals } from '../../../Model/global';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from 'src/app/Service/shared.service';
import { Subscription } from 'rxjs';

const JSMpeg = require('jsmpeg-player');
declare var $: any;


@Component({
    selector: 'app-rightbar',
    templateUrl: './rightbar.component.html',
    styleUrls: ['./rightbar.component.scss'],
    providers: [LoginserviceService, ToastrManager]
})
export class RightbarComponent implements OnInit {
    private stakemsg: any;
    private oneclickstakeData: any;
    public showBalanceData = '';
    public Balance: any;
    public Liability: any;
    public isconfirm: any;
    public loading1: any;
    public P_L: any;
    public FreeChips: any;
    public MatchStack: any[];
    public betslipinfo;
    public MatchId: any;
    public MarketId: any;
    public loading: any;
    public SportId: any;
    public showfancydBets: any;
    betslip = 1;
    public stackValues: any;
    public loginUserData: string | any;
    public userId: any;
    public usertypeId: any;
    public IsShowBetInform: any;
    public subscriptionBets: any;
    public back: any;
    public showLiveTv;
    public showSessionBets;
    public showMatchedBets;
    public IsShowBetInfo;
    public IsToggle: any;
    private betUserData: any;
    private stakeIds: any = [];
    private total_liability: any;
    private matchedBets: any;
    private unmatchedBets: any;
    public matchedBetslength: any;
    public unmatchedBetslength: any;
    private favdata: any;
    public unfavdata: any;
    public oneClickSelectedBet: any;
    private btnActive: any;
    private config_max_odd_limit: any;
    private isActive: boolean;
    private stackval: any;
    public ischeckconfirm: any;
    private setRef: number;
    isSticky: boolean = false;
    public latestLength: any;
    public player: any;
    public selectedmatch: any;
    balanceData: any;
    OneClickStackButton: any;
    oddBetSlipValArray: any = [];
    MatchStackButton: any = [];
    fancyBetslength: any;
    fancyBets: any;
    Scorekeyurl;
    public tvCodes: any;
    public show360Score: any;
    public hostname: any;
    public tvUrlCricket: any;
    public show360Board: any;
    private sideTVURLs;
    public live_sport_tv_url;
    public unsubs: Subscription;

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        this.isSticky = window.pageYOffset >= 20;
    }

    @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: HTMLCanvasElement;

    constructor(public toastr: ToastrManager, public matchModel: Match, public route: ActivatedRoute, public matchService: MatchService, public globals: Globals, public router: Router, public sanitizer: DomSanitizer,
        private shared: SharedService) {

        this.IsToggle = this.globals.IsToggle == undefined ? false : this.globals.IsToggle;
        this.btnActive = this.globals.btnActive == undefined ? false : this.globals.btnActive;

        this.router.events.subscribe((event) => {

            if (this.subscriptionBets) {
                this.subscriptionBets.unsubscribe();
            }
        });
        this.route.queryParams.subscribe(params => {
            this.MatchId = params['MatchId'];
            this.MarketId = params['MarketId'];
            this.SportId = params['SportId'];
        });

        // Subscriber for close sidebar when it is open on match-odds component. 
        this.unsubs = this.shared.getShowSideBar().subscribe(res => {
            console.log(res)
            this.showLiveTv = res
        });

    }

    ngOnInit() {
        this.player = '';

        if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
            this.fetchBetList();

        } else {
            this.getAllBets();
        }
        this.getTvUrlsList();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                    this.fetchBetList();
                    this.show360Board = true;
                    this.getMatchname();

                } else {
                    this.getAllBets();
                    this.show360Board = false;


                }
            }
        });

        this.total_liability = 0;
        this.loginUserData = JSON.parse(localStorage.getItem('UserLoginData'));
        let stackValues = this.loginUserData.stack.split(',');
        let oneclickStack = this.loginUserData.one_click_stack.split(',');
        this.MatchStackButton = (stackValues);
        this.OneClickStackButton = (oneclickStack);
        this.setRef = 0;
        this.ischeckconfirm = this.ischeckconfirm == undefined ? 'N' : localStorage.getItem('is_confirm_bet');
        this.showBalanceData = 'showBalanceData';
        this.betslipinfo = true;
        this.IsShowBetInform = (localStorage.getItem('IsShowBetInform1') != undefined ? localStorage.getItem('IsShowBetInform1') : true);
        this.userId = this.loginUserData.user_id;
        this.usertypeId = this.loginUserData.type;
        this.getChipDatabyId();
        this.MatchStack = this.matchModel.stackSetting;
        this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));
        this.hostname = window.location.hostname;
        this.tvUrlCricket = null;
        this.getMatchname();

    }
    ngOnDestroy() {
        this.unsubs.unsubscribe();
    }

    getTVURL() {
        this.live_sport_tv_url = localStorage.getItem('live_sport_tv_url');
        if (this.live_sport_tv_url == null || this.live_sport_tv_url == 'null')
            this.live_sport_tv_url = false;
        if (this.live_sport_tv_url) {
            this.live_sport_tv_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.live_sport_tv_url);
        }
    }
    getTvUrlsList() {
        this.matchService.getTVUrls().subscribe((res: any) => {
            this.sideTVURLs = res.data;
        })
    }

    isValidbutt(btns) {
        if (btns != undefined) {
            let matchStk = btns;
            for (let h = 0; h < matchStk.length; h++) {
                if (matchStk[h] == '') {
                    return true;
                }
            }
        }
    }

    isValidbuttoneclick(btns) {

        if (btns != undefined) {
            let matchStk = btns;
            for (let h = 0; h < matchStk.length; h++) {
                if (matchStk[h] == '' || matchStk[h] == null) {
                    return true;
                }
            }
        }
    }

    getMatchname() {
        this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));

        this.matchService.getMatchname().subscribe(response => {
            //debugger
            this.tvCodes = response;
            if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                this.Scorekeyurl = this.tvCodes.graph_score.replace('%S', this.selectedmatch.match_id);
                this.Scorekeyurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Scorekeyurl);
            }

        }, error => {
        });
    }

    ChangeFrame(id) {
        if (id == 1) {
            this.tvUrlCricket = this.sideTVURLs.tv1_url;
        } else if (id == 2) {
            this.tvUrlCricket = this.sideTVURLs.tv2_url;
        } else if (id == 3) {
            this.tvUrlCricket = this.sideTVURLs.tv3_url;
        } else if (id == 4) {
            this.tvUrlCricket = this.sideTVURLs.tv4_url;
        } else {
            this.showLiveTv = ''
        }
        this.tvUrlCricket = this.sanitizer.bypassSecurityTrustResourceUrl(this.tvUrlCricket);

    }


    setbtn(indx) {
        this.setRef = indx;
    }

    update_confirmation_setting(isConfirm) {

        let finalco = isConfirm == true ? 'N' : 'Y';
        if (isConfirm == undefined) {
            localStorage.setItem('is_confirm_bet', 'Y');
        } else {
            localStorage.setItem('is_confirm_bet', finalco);
        }
    }

    setOneClickBetStake(stake, ind) {

        this.btnActive = ind;
        this.globals.btnActive = ind;
        this.oneClickSelectedBet = parseInt(stake);
        this.globals.oneClickSelectedBet = parseInt(stake);
    }


    deleteUser(betId, userId) {

        let result = confirm('Are you sure want to delete Records Unmatched');
        if (result) {
            this.matchService.deleteUserbet(betId, userId).subscribe((data) => {
                this.stakemsg = data.message;
                this.toastr.successToastr(this.stakemsg);
            }, (err) => {
            });
        }

    }

    getStakesett(type, data) {
        if (this.matchModel.tempArray.length > 0) {
            let isConfirm = confirm('All bets in your betslip will be cleared. Is this ok?');
            if (isConfirm) {
                this.matchModel.tempArray = [];
                this.clearAll();
                this.IsToggle = type;
                this.globals.IsToggle = this.IsToggle;
                this.btnActive = 0;
                this.globals.btnActive = 0;
                this.oneClickSelectedBet = data[0];
                this.globals.oneClickSelectedBet = data[0];
            } else {
                this.IsToggle = undefined;
                this.globals.IsToggle = undefined;

            }
        } else {
            this.IsToggle = type;
            this.globals.IsToggle = this.IsToggle;
            this.btnActive = 0;
            this.globals.btnActive = 0;
            this.oneClickSelectedBet = data[0];
            this.globals.oneClickSelectedBet = data[0];
        }


    }


    showBetInform() {
        this.IsShowBetInform = this.IsShowBetInform === true ? false : true;
        localStorage.setItem('IsShowBetInform1', this.IsShowBetInform);
    }


    clearAll = function () {
        this.betslipinfo = true;
        this.IsShowBetInfo = false;
        this.total_liability = 0;
        this.isActive = false;
        for (let i = 0; i < this.matchModel.stakeIds.length; i++) {
            this.matchModel.stake2['field_' + this.matchModel.stakeIds[i].UId] = 0;
        }
    };


    getChipDatabyId() {
        this.matchService.getChipDatabyId().subscribe((data) => {
            if (!data.error) {
                if (data.data != undefined) {

                    this.matchModel.marqueText = data.data.site_message;
                    this.balanceData = data.data;
                    this.Balance = data.data.balance;
                    this.FreeChips = data.data.freechips;
                    this.Liability = data.data.liability;
                    this.P_L = data.data.profit_loss;
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
            localStorage.UserLoginData = null;
            this.router.navigate(['login']);

        }, (err) => {
            console.log(err);
        });
    }

    trackByFn(index: any, item: any) {
        return index;
    }

    setfavourite(marketid) {

        this.favdata = {
            market_id: marketid,
        };
        this.matchService.setFavorite(this.favdata).subscribe((data) => {
            this.stakemsg = data.message;
            // this.toastr.successToastr(this.stakemsg);
        }, (err) => {
            console.log(err);
        });
    }

    setUnfavourite(marketid) {

        this.unfavdata = {
            market_id: marketid,
        };
        this.matchService.setUnFavorite(this.unfavdata).subscribe((data) => {
            this.stakemsg = data.message;
            //this.toastr.successToastr(this.stakemsg);
        }, (err) => {
            console.log(err);
        });
    }

    SaveOneClick(oneclickval) {
        this.oneclickstakeData = {
            one_click: oneclickval.join(','),
        };
        this.matchService.updateUserOneClickStack(this.oneclickstakeData).subscribe((data) => {
            this.stakemsg = data.message;
            this.OneClickStackButton = oneclickval;
            this.toastr.successToastr(this.stakemsg);
        }, (err) => {
            console.log(err);
        });
    }

    getUserMatchStack() {
        this.matchService.getUserMatchStack().subscribe((data) => {

            this.stakemsg = data.message;
            this.stackValues = data.data;
            let stackValues = this.stackValues.split(',');
            this.stackValues = (stackValues);
            //this.toastr.successToastr(this.stakemsg);
        }, (err) => {
            console.log(err);
        });
    }

    updateUserMatchStack(stackVal) {

        var params = {
            'match_stack': stackVal.join(',')
        };
        this.matchService.updateUserMatchStack(params).subscribe((data) => {

            this.stakemsg = data.message;
            let stackValues = stackVal;
            this.MatchStackButton = (stackValues);

            this.toastr.successToastr(this.stakemsg);
        }, (err) => {
            console.log(err);
        });
    }

    getBetSlipDataForOdds() {
        this.matchModel.tempArray = [];
        let oddBetSlipVal = JSON.parse(localStorage.getItem('betList'));
        this.oddBetSlipValArray.push(oddBetSlipVal);
        this.matchModel.tempArray.push(oddBetSlipVal);
        if (this.globals.IsToggle) {
            this.matchModel.tempArray[0].stake = this.globals.oneClickSelectedBet;
            this.matchModel.tempArray[0].p_l = ((this.matchModel.tempArray[0].odds * this.matchModel.tempArray[0].stake) - this.matchModel.tempArray[0].stake);
            this.matchModel.loading1 = true;

            this.Place_Order(this.matchModel.tempArray);
        }
    }

    Place_Order(betValue) {

        this.isconfirm = true;

        if (localStorage.getItem('is_confirm_bet') == 'Y') {
            this.isconfirm = confirm('Are you sure you want to place your bet?');
        } else {
            // this.isconfirm = false;
        }

        if (this.isconfirm) {
            this.loading = true;
            if (betValue[0].is_fancy) {
                let betData = {
                    'fancy_id': betValue[0].fancy_id,
                    'run': betValue[0].odds,
                    'stack': parseInt(betValue[0].stake),
                    'is_back': betValue[0].is_back + '',
                    'size': betValue[0].size
                };
                this.matchService.saveFancyBet(betData).subscribe((data) => {
                    this.matchModel.tempArray = [];
                    this.stakemsg = data.message;
                    this.loading = false;
                    this.matchModel.loading1 = false;

                    if (data.error == true) {
                        this.toastr.errorToastr(this.stakemsg, null, { toastTimeout: 2000 });

                    } else {
                        this.toastr.successToastr(this.stakemsg, null, { toastTimeout: 1000 });
                    }
                }, (err) => {
                    this.loading = false;
                    this.stakemsg = err.message;

                    this.toastr.errorToastr(this.stakemsg, null, { toastTimeout: 2000 });


                });
            } else {
                let betData = {
                    'market_id': betValue[0].market_id,
                    'selection_id': betValue[0].selection_id,
                    'odds': betValue[0].odds,
                    'stack': parseInt(betValue[0].stake),
                    'is_back': betValue[0].is_back + '',
                };
                this.matchService.saveBet(betData).subscribe((data) => {
                    this.matchModel.tempArray = [];
                    this.stakemsg = data.message;
                    this.loading = false;
                    this.matchModel.loading1 = false;

                    if (data.error == true) {
                        this.toastr.errorToastr(this.stakemsg);

                    } else {
                        this.toastr.successToastr(this.stakemsg, '', { toastTimeout: 1000 });
                    }
                }, (err) => {
                    this.loading = false;
                    this.stakemsg = err.message;

                    this.toastr.errorToastr(this.stakemsg, null, { toastTimeout: 2000 });

                });
            }

        }
    }

    calculateP_lOnStack(stake, stkbtn, isback, back) {

        this.stakeIds = this.matchModel.stakeIds;

        this.stackval = (back.stake == '' || back.stake == null) ? 0 : back.stake;
        back.stake = parseFloat(stkbtn) + parseFloat(this.stackval);
        if (parseFloat(back.stake) <= parseFloat(back.max_bet_liability) || true) {
            this.isActive = true;
            back.p_l = ((back.odds * back.stake) - back.stake);
            if (isback == 0) {
                this.total_liability = back.p_l;
            } else {
                this.total_liability = back.stake;

            }
            this.matchModel.calculateProfitLoss(back);
            if (back.priceVal <= this.config_max_odd_limit || back.is_session_fancy == 'Y' || true) {
                if (back.priceVal > 0) {
                    const tempback = back;
                    this.isActive = true;
                    this.total_liability = 0;
                    if (back.isManual) {
                        const pval = back.pricefinal + 1;
                        back.p_l = ((pval * back.stake) - back.stake);
                    } else {
                        back.p_l = ((back.priceVal * back.stake) - back.stake);
                    }
                    this.matchModel.ProfitLoss = back.p_l;


                }
            }
        } else {
            let msg = '';
            if (back.is_session_fancy == 'Y') {
                msg = 'Max session bet liability is ' + parseFloat(back.max_bet_liability);
            } else {
                msg = 'Max market bet liability is ' + parseFloat(back.max_bet_liability);
            }
            back.stake = parseFloat(back.max_bet_liability);
            this.isActive = false;
        }
    }

    calculateP_lOnStackOnInput(stake, stkbtn, isback, back) {

        this.stakeIds = this.matchModel.stakeIds;

        // this.stackval = (back.stake == '' || back.stake == null) ? 0 : back.stake;
        back.stake = parseFloat(stkbtn);
        if (parseFloat(back.stake) <= parseFloat(back.max_bet_liability) || true) {
            this.isActive = true;
            back.p_l = ((back.odds * back.stake) - back.stake);
            if (isback == 0) {
                this.total_liability = back.p_l;
            } else {
                this.total_liability = back.stake;

            }
            this.matchModel.calculateProfitLoss(back);
            if (back.priceVal <= this.config_max_odd_limit || back.is_session_fancy == 'Y' || true) {
                if (back.priceVal > 0) {
                    const tempback = back;
                    this.isActive = true;
                    this.total_liability = 0;
                    if (back.isManual) {
                        const pval = back.pricefinal + 1;
                        back.p_l = ((pval * back.stake) - back.stake);
                    } else {
                        back.p_l = ((back.priceVal * back.stake) - back.stake);
                    }
                    this.matchModel.ProfitLoss = back.p_l;


                }
            }
        } else {
            let msg = '';
            if (back.is_session_fancy == 'Y') {
                msg = 'Max session bet liability is ' + parseFloat(back.max_bet_liability);
            } else {
                msg = 'Max market bet liability is ' + parseFloat(back.max_bet_liability);
            }
            back.stake = parseFloat(back.max_bet_liability);
            this.isActive = false;
        }
    }

    fetchBetList() {
        this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));
        var betsVal = {
            match_id: this.selectedmatch.match_id,
        };
        this.subscriptionBets = this.matchService.getBetsByMatchId(betsVal).subscribe((data) => {
            if (!data.error) {
                if (data.data != null) {
                    this.latestLength = data.data.length;
                    this.matchModel.latestLength = this.latestLength;
                    this.betUserData = data.data;
                    this.matchedBets = this.betUserData.filter(t => t.is_fancy == '0' && t.is_matched == '1');
                    this.unmatchedBets = this.betUserData.filter(t => t.is_matched == '0');
                    this.fancyBets = this.betUserData.filter(t => t.is_fancy == '1' && t.is_matched == '1');
                    this.fancyBetslength = this.fancyBets.length;
                    this.matchedBetslength = this.matchedBets.length;
                    this.unmatchedBetslength = this.unmatchedBets.length;

                } else {
                    this.matchedBetslength = 0;
                    this.unmatchedBetslength = 0;
                }
            } else if (data.code == 412) {
                localStorage.clear();

                this.router.navigate(['login']);

            }

        }, (err) => {

            if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                setTimeout(() => resolve(this.fetchBetList()), 4000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                    setTimeout(() => resolve(this.fetchBetList()), 4000);
                }
            });
    }

    getAllBets() {
        this.subscriptionBets = this.matchService.getAllBets().subscribe((data) => {
            if (!data.error) {
                this.betUserData = data.data;
                this.matchedBets = this.betUserData;
                this.matchedBets = this.betUserData.filter(t => t.is_fancy == '0' && t.is_matched == '1');
                this.unmatchedBets = this.betUserData.filter(t => t.is_matched == '0');
                this.fancyBets = this.betUserData.filter(t => t.is_fancy == '1' && t.is_matched == '1');
                this.fancyBetslength = this.fancyBets.length;
                this.matchedBetslength = this.matchedBets.length;
                this.unmatchedBetslength = this.unmatchedBets.length;
            } else if (data.code == 412) {
                localStorage.clear();
                window.location.reload();
                this.router.navigate(['login']);

            }

        }, (err) => {

            if (this.router.url.split('?')[0] == '/dashboard/home') {
                setTimeout(() => resolve(this.getAllBets()), 2000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] == '/dashboard/home') {
                    setTimeout(() => resolve(this.getAllBets()), 2000);
                }
            });
    }


    RemoveBackLay(back) {
        this.betslipinfo = true;
        this.IsShowBetInfo = false;
        this.total_liability = 0;
        this.matchModel.tempArray = [];
    }

    showEditPopup() {
        $('#edit_popup').show();
    }

    cancelPop() {
        $('#edit_popup').hide();
    }
}
