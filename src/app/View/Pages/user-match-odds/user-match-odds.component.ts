import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatchService } from '../../../Service/Match/match.service';
import { Match } from '../../../Model/match';
import { RightbarComponent } from '../../Partial/rightbar/rightbar.component';
import { resolve } from 'q';
import { Globals } from '../../../Model/global';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrManager } from 'ng6-toastr-notifications';
import { SharedService } from 'src/app/Service/shared.service';

declare var $: any;


@Component({
    selector: 'app-user-match-odds',
    templateUrl: './user-match-odds.component.html',
    styleUrls: ['./user-match-odds.component.scss'],
    providers: [RightbarComponent]
})
export class UserMatchOddsComponent implements OnInit, OnDestroy {
    public displayScore: boolean;
    public Documents: any;
    SPORTID = 4;
    showMarket = true;
    matchList: any = [];
    now: any;
    public ScoreResult: any;
    public hostname: any;
    public tvUrl: any;
    public NewMatchId: any;
    public InClick = -1;
    card_dataArray: any = [];
    instanceWorliArray: any = [];
    card_dataArray1: any = [];
    bollywoodArray: any = [];
    ball;
    aall;
    private card_data: any;
    private instanceWorli: any;
    private Home: any;
    private away: any;
    private overlast: any;
    private score_key: any;
    private fancyDetails: any;
    private calltype = 1;
    private bindcall = 1;
    private rateDifference: any;
    private arrayObj: any = [];
    private shotarea: boolean;
    private usermatchoDds: string;
    private Lay: string;
    private Back: string;
    private MarketId: any;
    private isManualMatchOdds: any;
    private MatchId: any;
    private SportId: any;
    private ballByBallScore: any;
    private scoretype: any;
    private matchName: any;
    private selectedmatch: any;
    private priceVal: number;
    private timerMatch: any;
    private userDetails: any;
    private matchUserTypeId: any;
    private matchUserId: any;
    private safeSrc: any;

    public card1: any
    public sliced_card1: any;
    public sliced_card2: any;
    public val1: number;
    public val2: number;
    public val3: number;
    public val4: number;
    card_data32Array:any;
    card_data32;
    oddEven
    constructor(private matchService: MatchService, private route: ActivatedRoute, private matchModel: Match, private rightbar: RightbarComponent, private router: Router, public globals: Globals, public sanitizer: DomSanitizer, public toastr: ToastrManager,
        private sharedService: SharedService) {

        this.route.queryParams.subscribe(params => {
            this.MatchId = params['MatchId'];
            this.MarketId = params['MarketId'];
            this.SportId = params['SportId'];
            this.NewMatchId = params['refresh'];
            this.calltype = 1;
            this.bindcall = 1;
        });

        this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));
        this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
        this.matchUserTypeId = this.userDetails.user_type_id;
        this.matchUserId = this.userDetails.user_id;
        this.shotarea = true;
        this.hostname = window.location.hostname;
        this.getmatchDetails();
        this.router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                ////debugger;


                this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));
                /*  if (this.selectedmatch.match_id == -1) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=3patit20&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -2) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=3pati1day&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -3) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=3patitest&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -4) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=pokert20&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -5) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=poker1day&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -7) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=ab20&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -8) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=lucky7ud&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  } else if (this.selectedmatch.match_id == -145) {
                      this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=lucky7ud&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  }
                  else if (this.selectedmatch.match_id == -151) {
                      /!*this.tvUrl = 'https://stream.fawk.app/#/stream/56767?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09' +'&&rand='+new Date().getTime();*!/
                      try {
                          document.getElementById('lotusIframeDiv').innerHTML ='<iframe id="lotusIframe"  src="https://stream.fawk.app/#/stream/56767?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09" marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                          //  document.getElementById('lotusIframe').remove();
                      } catch (e) {
                      }


                  }
                  else if (this.selectedmatch.match_id == -150) {
                      this.tvUrl = 'https://liveteen.crakex.in/virtualgame.html?streamName=greyhound&domain=' + this.hostname + '&token=' + this.userDetails.token;
                  }else if (this.selectedmatch.match_id == -152) {

                      try {
                          document.getElementById('lotusIframeDiv').innerHTML ='<iframe id="lotusIframe"  src="https://stream.fawk.app/#/stream/56768?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09" marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                          //  document.getElementById('lotusIframe').remove();
                      } catch (e) {
                      }
                      /!*this.tvUrl = 'https://stream.fawk.app/#/stream/56768?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09' +'&&rand='+new Date().getTime();*!/




                  }else if (this.selectedmatch.match_id == -154) {

                      try {
                          document.getElementById('lotusIframeDiv').innerHTML ='<iframe id="lotusIframe"  src="https://stream.fawk.app/#/stream/92037?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09" marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                          //  document.getElementById('lotusIframe').remove();
                      } catch (e) {
                      }
                      /!*this.tvUrl = 'https://stream.fawk.app/#/stream/56768?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09' +'&&rand='+new Date().getTime();*!/




                  }else if (this.selectedmatch.match_id == -156) {

                      try {
                          document.getElementById('lotusIframeDiv').innerHTML ='<iframe id="lotusIframe"  src="https://stream.fawk.app/#/stream/98789?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09" marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                          //  document.getElementById('lotusIframe').remove();
                      } catch (e) {
                      }
                      /!*this.tvUrl = 'https://stream.fawk.app/#/stream/56768?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09' +'&&rand='+new Date().getTime();*!/




                  }
                  else if (this.selectedmatch.match_id == -157) {

                      try {
                          document.getElementById('lotusIframeDiv').innerHTML ='<iframe id="lotusIframe"  src="https://stream.fawk.app/#/stream/87564?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09" marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                          //  document.getElementById('lotusIframe').remove();
                      } catch (e) {
                      }
                      /!*this.tvUrl = 'https://stream.fawk.app/#/stream/56768?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09' +'&&rand='+new Date().getTime();*!/




                  }

                  this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.tvUrl);*/
                /* Your code goes here on every router change */
            }
        });

    }

    ngOnInit() {
        // this.now = new Date().getTime();
        /*    if (this.selectedmatch.match_id == -1) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=3patit20&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -2) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=3pati1day&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -3) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=3patitest&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -4) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=pokert20&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -5) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=poker1day&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -7) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=ab20&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -8) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=lucky7ud&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -145) {
                this.tvUrl = 'https://liveteen.crakex.in/livevideo.html?streamName=lucky7ud&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -151) {
    
                this.tvUrl = 'https://stream.fawk.app/#/stream/56767?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09';
    
            } else if (this.selectedmatch.match_id == -150) {
                this.tvUrl = 'https://liveteen.crakex.in/virtualgame.html?streamName=greyhound&domain=' + this.hostname + '&token=' + this.userDetails.token;
            } else if (this.selectedmatch.match_id == -152) {
    
                this.tvUrl = 'https://stream.fawk.app/#/stream/56768?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09';
    
            } else if (this.selectedmatch.match_id == -154) {
    
                this.tvUrl = 'https://stream.fawk.app/#/stream/92037?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09';
    
            } else if (this.selectedmatch.match_id == -156) {
    
                this.tvUrl = 'https://stream.fawk.app/#/stream/98789?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09';
    
            } else if (this.selectedmatch.match_id == -157) {
    
                this.tvUrl = 'https://stream.fawk.app/#/stream/87564?token=QTBUK2JOYmFPc1JoZFgyaFNTWjVuUT09';
    
            }
            this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.tvUrl);*/

        this.Back = Globals.Back;
        this.Lay = Globals.Lay;
        this.usermatchoDds = this.router.url;
        //  $.getScript('/assets/js/captcha.js');
        if (this.selectedmatch.match_id == -7) {
            this.marketResultListByMatchId();
        }
        this.sharedService.setShowSideBar(false);

    }


    ngOnDestroy() {
        setTimeout(() => {
            localStorage.setItem('live_sport_tv_url', null);
        }, 1000);
        this.sharedService.setShowSideBar(false);
        clearTimeout(this.timerMatch);
    }


    covertToDigits(a, b) {
        let totalVal;
        totalVal = parseFloat(a) + parseFloat(b);
        return totalVal.toFixed('2');
    }

    setUnfavourite(marketId) {
        this.rightbar.setUnfavourite(marketId);

    }

    setfavourite(marketId) {

        this.rightbar.setfavourite(marketId);

    }


    LeaderShow(indx, fancy) {

        if (this.InClick == -1) {
            if (indx == this.InClick) {
                this.InClick = -1;
            } else {
                this.InClick = indx;
            }


        } else {
            if (indx == this.InClick) {
                this.InClick = -1;
            } else {
                this.InClick = indx;
            }
        }


    }

    fancyPos(value) {
        return JSON.parse(value);

    }

    getmatchDetails() {

        this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));

        const params = {
            'match_id': this.selectedmatch.match_id,
            'user_id': this.matchUserId,
            'user_type_id': this.matchUserTypeId,
        };
        this.matchService.matchDetails(params).subscribe((data) => {

            try {
                if (!data.error) {
                    if (data.data.result == 0 || data.data.marketid == '') {
                        this.toastr.errorToastr('Match Closed.');
                        this.router.navigate(['dashboard/home']);
                    }

                    this.matchList = data.data.match;
                    this.scoretype = this.matchList[0].score_type;
                    this.score_key = this.matchList[0].score_key;
                    if ((!localStorage.getItem('live_sport_tv_url') || localStorage.getItem('live_sport_tv_url') == 'null' || localStorage.getItem('live_sport_tv_url') == null)
                        && (this.matchList[0].sport_id == '4' || this.matchList[0].sport_id == '2' || this.matchList[0].sport_id == '1')) {
                        localStorage.setItem('live_sport_tv_url', this.matchList[0].live_sport_tv_url);
                    }
                    if (this.calltype == 1) {
                        if (this.selectedmatch.match_id == -1) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -2) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -3) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -4) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -5) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -7) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -8) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } else if (this.selectedmatch.match_id == -145) {
                            this.tvUrl = this.matchList[0].tv_url;
                        } 
                        else if (this.selectedmatch.match_id == -1010) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1011) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1012) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1013) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1014) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1015) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1016) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -1017) {
                            this.tvUrl = this.matchList[0].tv_url;
                        }
                        else if (this.selectedmatch.match_id == -150) {
                            this.tvUrl = 'https://liveteen.crakex.in/virtualgame.html?streamName=greyhound&domain=' + this.hostname + '&token=' + this.userDetails.token;
                        }
                        else if (this.selectedmatch.match_id == -152) {

                            this.tvUrl = this.matchList[0].tv_url;

                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }

                        } else if (this.selectedmatch.match_id == -154) {
                            this.tvUrl = this.matchList[0].tv_url;


                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }

                        } else if (this.selectedmatch.match_id == -156) {
                            this.tvUrl = this.matchList[0].tv_url;

                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        } else if (this.selectedmatch.match_id == -157) {

                            this.tvUrl = this.matchList[0].tv_url;

                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        } else if (this.selectedmatch.match_id == -158) {

                            this.tvUrl = this.matchList[0].tv_url;

                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }
                        else if (this.selectedmatch.match_id == -1001) {

                            //this.tvUrl = this.matchList[0].tv_url;
                            this.tvUrl = "https://ss247.life/api/v2/virtualgame/get_virtual_video.php?eventId=56966";


                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }
                        else if (this.selectedmatch.match_id == -1002) {

                            //this.tvUrl = this.matchList[0].tv_url;
                            this.tvUrl = "https://ss247.life/api/v2/virtualgame/get_virtual_video.php?eventId=56766";


                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }
                        else if (this.selectedmatch.match_id == -1003) {

                            //this.tvUrl = this.matchList[0].tv_url;
                            this.tvUrl = "https://ss247.life/api/v2/virtualgame/get_virtual_video.php?eventId=56769";


                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }
                        else if (this.selectedmatch.match_id == -1004) {

                            //this.tvUrl = this.matchList[0].tv_url;
                            this.tvUrl = "https://ss247.life/api/v2/virtualgame/get_virtual_video.php?eventId=87565";


                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }
                        else if (this.selectedmatch.match_id == -1005) {

                            //this.tvUrl = this.matchList[0].tv_url;
                            this.tvUrl = "https://ss247.life/api/v2/virtualgame/get_virtual_video.php?eventId=98793";


                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }
                        else if (this.selectedmatch.match_id == -151) {

                            this.tvUrl = this.matchList[0].tv_url;
                            console.log(this.tvUrl + "tv url")

                            try {
                                document.getElementById('lotusIframeDiv').innerHTML = '<iframe id="lotusIframe"  marginwidth="0"  marginheight="0" frameborder="0" width="100%" height="500px" scrolling="no" allowfullscreen="allowfullscreen"></iframe>';
                                console.log(document.getElementById("lotusIframe"));
                                document.getElementById("lotusIframe").setAttribute("src", this.tvUrl);
                            } catch (e) {
                            }
                        }

                        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.tvUrl);
                        this.GetScoreApi();
                    }
                    this.calltype = 2;
                    // }
                    //  this.SocketMarket(data.data.match)
                    if (this.matchList == '') {
                        this.toastr.errorToastr('Match Closed.');
                        this.router.navigate(['dashboard/home']);
                    }
                    this.fancyDetails = data.data.fancy;
                    this.calltype = 2;
                } else {
                    this.router.navigate(['dashboard/home']);

                    this.toastr.errorToastr(data.message);
                }

                if (this.calltype == 2) {
                    //    32 Casino cards starts
                    if (this.matchList[0].match_id == '-158' && this.matchList[0].cards.length > 0) {
                        const cards_array = { 'A': 1, 'K': 13, 'Q': 12, 'J': 11, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10 };
                        if (this.matchList[0].cards[0].length > 0) {
                            this.val1 = 8;
                            for (let i = 0; i < this.matchList[0].cards[0].length, this.matchList[0].cards[0].length > i; i++) {
                                this.card1 = this.matchList[0].cards[0][i];
                                this.sliced_card1 = this.card1.slice(0, 1);
                                this.sliced_card2 = this.card1.slice(0, 2);
                                for (const [key, value] of Object.entries(cards_array)) {
                                    if (key == this.sliced_card1 || key == this.sliced_card2) {
                                        this.val1 = this.val1 + value;
                                    }
                                }
                            }
                        }
                        if (this.matchList[0].cards[1].length > 0) {
                            for (let i = 0; i <= this.matchList[0].cards[1].length, this.matchList[0].cards[1].length > i; i++) {
                                this.card1 = this.matchList[0].cards[1][i];
                                this.sliced_card1 = this.card1.slice(0, 1);
                                this.sliced_card2 = this.card1.slice(0, 2);
                                this.val2 = 9;
                                for (const [key, value] of Object.entries(cards_array)) {
                                    if (key == this.sliced_card1 || key == this.sliced_card2) {
                                        this.val2 = this.val2 + value;
                                    }
                                }
                            }
                        }
                        if (this.matchList[0].cards[2].length > 0) {
                            for (let i = 0; i <= this.matchList[0].cards[2].length, this.matchList[0].cards[2].length > i; i++) {
                                this.card1 = this.matchList[0].cards[2][i];
                                this.sliced_card1 = this.card1.slice(0, 1);
                                this.sliced_card2 = this.card1.slice(0, 2);
                                this.val3 = 10;
                                for (const [key, value] of Object.entries(cards_array)) {
                                    if (key == this.sliced_card1 || key == this.sliced_card2) {
                                        this.val3 = this.val3 + value;
                                    }
                                }
                            }
                        }
                        if (this.matchList[0].cards[3].length > 0) {
                            for (let i = 0; i <= this.matchList[0].cards[3].length, this.matchList[0].cards[3].length > i; i++) {
                                this.card1 = this.matchList[0].cards[3][i];
                                this.sliced_card1 = this.card1.slice(0, 1);
                                this.sliced_card2 = this.card1.slice(0, 2);
                                this.val4 = 11;
                                for (const [key, value] of Object.entries(cards_array)) {
                                    if (key == this.sliced_card1 || key == this.sliced_card2) {
                                        this.val4 = this.val4 + value;
                                    }
                                }
                            }
                        }
                    }
                    //    32 Casino cards ends
                }
            } catch (e) {
            }

        }, (err) => {
            if (err.code == 412) {
                this.router.navigate(['login']);

            }
            if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                this.timerMatch = setTimeout(() => resolve(this.getmatchDetails()), 1000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                    this.timerMatch = setTimeout(() => resolve(this.getmatchDetails()), 1000);
                }
            });
    }

    marketResultListByMatchId() {
        let marketData = {
            match_id: this.selectedmatch.match_id
        };
        this.matchService.marketResultListByMatchId(marketData).subscribe(response => {
            if (!response.error) {
                this.card_dataArray = response.data;
                //  this.card_data = JSON.parse(response.data.card_data);
                // $('#modalpokerresult').show();

            }
        }, (err) => {
            if (err.code == 412) {
                this.router.navigate(['login']);

            }

            if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                this.timerMatch = setTimeout(() => resolve(this.marketResultListByMatchId()), 1000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                    this.timerMatch = setTimeout(() => resolve(this.marketResultListByMatchId()), 1000);
                }
            });
    }
    showPlayerNumber(value){
        return value.replace('Player','')
    }
    getNameSingle(value){
        return value.replace('Single','')
    }
    getNameSingleWorli(value){
        return value.replace('Single','')
    }
    getOddValue(price, isback, name, id, marketid, index, marketitem) {

        this.arrayObj = {
            selection_id: id,
            market_id: marketitem.market_id,
            odds: price,
            stake: 0,
            is_back: isback,
            is_fancy: 0,
            MatchName: marketitem.name,
            placeName: name,
            isManual: 0,
            match_Id: marketitem.match_id,
            is_session_fancy: 'N'
        };
        this.matchModel.isbetslipshow = true;
        localStorage.setItem('betList', JSON.stringify(this.arrayObj));
        this.matchModel.setUser(this.arrayObj);
        this.rightbar.getBetSlipDataForOdds();
    }

    getOddValueManual(price, volumeLimit, backorlay, name, id, uniqueId, marketid, index, active, marketitem) {

        price = parseFloat(price);
        this.priceVal = price;
        if (price > 0) {
            const stake = 0;
            let step = 0.01;
            this.priceVal = this.priceVal != undefined ? parseFloat(this.priceVal.toFixed(2)) : 0;
            if (!marketitem.IsRs) {
                if ((this.priceVal + '').length > 2) {
                    this.priceVal = this.priceVal / 10000;
                    step = 0.0001;
                }
                if ((this.priceVal + '').length == 1) {
                    this.priceVal = this.priceVal / 100;
                }
                if ((this.priceVal + '').length == 2) {
                    this.priceVal = this.priceVal / 100;
                }
            } else {
                step = 1;
            }
        }

        let pricefinal = parseFloat(this.priceVal.toFixed(2));
        pricefinal = parseFloat(pricefinal.toFixed(2));
        this.arrayObj = {
            userId: this.globals.loginUserData.user_id,
            ParantId: '',
            loginId: this.globals.loginUserData.user_id,
            selectionId: id,
            matchId: this.MatchId,
            isback: backorlay,
            stake: '',
            priceVal: parseFloat(price),
            p_l: 0,
            MarketId: marketid,
            isMatched: 1,
            UserTypeId: this.globals.loginUserData.type,
            placeName: name,
            MatchName: marketitem.matchName,
            deviceInfo: 'dfdfz',
            inplay: '',
            ApiVal: 0,
            unique_id: index,
            is_session_fancy: 'N',
            IsErrorShow: false,
            pricefinal: pricefinal,
            ratedifference: this.rateDifference,
            isManual: marketitem.isManualMatchOdds,
            betSlip: 1,
            max_bet_liability: marketitem.max_bet_liability,
            SportId: marketitem.SportId,
            matchdate: marketitem.matchdate
        };
        this.matchModel.isbetslipshow = true;
        localStorage.setItem('betList', JSON.stringify(this.arrayObj));
        this.matchModel.setUser(this.arrayObj);
    }

    setSessionValue(FancyObject, is_back, value, size) {

        this.arrayObj = {
            fancy_id: FancyObject.fancy_id,
            market_id: FancyObject.market_id,
            odds: value,
            stake: 0,
            is_fancy: 1,
            is_back: is_back,
            MatchName: FancyObject.name,
            placeName: FancyObject.name,
            isManual: 0,
            size: size,
            is_session_fancy: 'Y'
        };
        this.matchModel.isbetslipshow = true;
        localStorage.setItem('betList', JSON.stringify(this.arrayObj));
        this.matchModel.setUser(this.arrayObj);
        this.rightbar.getBetSlipDataForOdds();
    }


    GetScoreApi() {
        this.selectedmatch = JSON.parse(localStorage.getItem('selectedMatch'));
        const params = {
            'match_id': this.selectedmatch.match_id,
            'score_type': this.scoretype,
            'score_key': this.score_key
        };
        this.matchService.GetScoreApi(params).subscribe((result) => {
            if (result.length !== 0) {
                if (this.scoretype == '0' && this.score_key != '0') {

                    this.ballByBallScore = result.data.data;
                    if (this.ballByBallScore != undefined) {
                        // if (this.ballByBallScore[0].bd % 6 != 0) {
                        //     this.overlast = ((this.ballByBallScore[0].bd - (this.ballByBallScore[0].bd % 6)) / 6) + 1;
                        // } else {
                        //     this.overlast = ((this.ballByBallScore[0].bd - (this.ballByBallScore[0].bd % 6)) / 6);
                        // }
                        this.displayScore = true;

                    }


                } else {
                    this.ballByBallScore = [];

                    this.Documents = result.data;
                    this.displayScore = false;

                    if (this.Documents != null) {
                        if (this.Documents.eventTypeId === 2) {
                            this.Home = this.Documents.score.home;
                            this.away = this.Documents.score.away;
                        }
                    } else {
                        this.displayScore = false;
                    }
                }
            }

        }, (err) => {
            if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                this.timerMatch = setTimeout(() => resolve(this.GetScoreApi()), 1000);
            }
        },
            () => {
                if (this.router.url.split('?')[0] == '/dashboard/UserMatchOdds') {
                    this.timerMatch = setTimeout(() => resolve(this.GetScoreApi()), 1000);
                }
            });
    }

    showRulkes() {
        $('#modalrulesteenpatti').show();

    }

    closePopup() {
        $('#modalrulesteenpatti').hide();

    }

    showLuckyPopup() {
        $('#modalLucky').show();

    }
    show32cardsRules() {
        $('#modalrules32cards').show();

    }

    close32CardsPopup() {
        $('#modalrules32cards').hide();
        $('#modalrulesbollywoodtable').hide();


    }
    showdbollywoodCasinoRules() {
        $('#modalrulesbollywoodtable').show();

    }

    closeLuckyPopup() {
        $('#modalLucky').hide();

    }

    showResults(result) {
       
        let marketData = {
            market_id: result.mid
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                this.card_dataArray = response.data;
                this.card_data = JSON.parse(response.data.card_data);
                $('#modalpokerresult').show();

            }
        }, error => {
        });
    }

    showResults1(result) {
        let marketData = {
            market_id: result.market_id
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                this.card_dataArray1 = response.data;
                ////debugger;
                this.card_data = JSON.parse(response.data.card_data);
                this.aall = this.card_data.aall.split(',');
                this.ball = this.card_data.ball.split(',');
                $('#modalandarbaharresult').show();
            }
        }, error => {
        });
    }
   
    
   
    show32Results(result) {
        // $('#modal32Cardresult').show();
        let marketData = {
             market_id: result.mid
           // market_id: '29.211907135331'
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                this.card_data32Array = response.data;
                this.card_data32 = JSON.parse(response.data.card_data);
                this.oddEven = Object.entries(this.card_data32[0].odd_even);
                    console.log(this.oddEven);
                    
                console.log('card_data32', this.card_data32[0].cardsTotal)
                $('#modal32Cardresult').show();

            }
        }, error => {
        });
    }
    
    showDragonTiger1DayResults(result) {
        // $('#modalDragonTiger1Dayresult').show();
        // return
        let marketData = {
             market_id: result.mid
             //market_id: "28.210508112115"
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                this.card_dataArray = response.data;
                this.card_data = JSON.parse(response.data.card_data);
                console.log(this.card_data)
               
                $('#modalDragonTiger1Dayresult').show();

            }
        }, error => {
        });
    }
    showDragonTiger2020Results(result) {
        let marketData = {
            market_id: result.mid
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                this.card_dataArray = response.data;
                this.card_data = JSON.parse(response.data.card_data);
                console.log( this.card_dataArray)
                console.log( this.card_data)
                $('#modalDragonTiger2020result').show();

            }
        }, error => {
        });
    }
   

     

    showInstanceWorliResults(result) {
        //$('#modalInstanceWorliresult').show();
        let marketData = {
              market_id: result.mid,
            //market_id: '23.210508115314'
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                if(response.data != null){
                $('#modalInstanceWorliresult').show();
                this.instanceWorliArray = response.data;
                this.instanceWorli = JSON.parse(response.data.card_data);
                // this.oddEven = Object.entries(this.instanceWorli[0].odd_even);
                //     console.log(this.oddEven);
                    
                // console.log('card_data32', this.instanceWorli[0].cardsTotal)
                
                

            }
            else{
                console.log('No Data Found')
            }
        }
        }, error => {
        });
    }
    showBollyWoodLastResults(result) {
        //$('#modalInstanceWorliresult').show();
        let marketData = {
             market_id: result.mid,
             //market_id: "26.210508144650"
             
        };
        this.matchService.teenPattiMarketResult(marketData).subscribe(response => {
            if (!response.error) {
                if(response.data != null){
                $('#modalBollyWoodLastResults').show();
                this.bollywoodArray = response.data;
                if(this.selectedmatch.match_id == -1015){
                    this.instanceWorli = JSON.parse(response.data.card_data);

                }
                if(this.selectedmatch.match_id == -1016){
                    this.instanceWorli = JSON.parse(response.data.card_data);

                }
                if(this.selectedmatch.match_id == -1017){
                    this.instanceWorli = JSON.parse(response.data.card_data);

                }
                // this.oddEven = Object.entries(this.instanceWorli[0].odd_even);
                //     console.log(this.oddEven);
                    
              console.log('card_data32', this.instanceWorli)
                
                

            }
            else{
                console.log('No Data Found')
            }
        }
        }, error => {
        });
    }
    closeBollyWoodTablePopupResult(){
        $('#modalBollyWoodLastResults').hide();

    }
   
    closePopupAndarResult() {
        $('#modalandarbaharresult').hide();

    }

    closePopupResult() {
        $('#modalpokerresult').hide();
        $('#modalDragonTiger2020result').hide();
        $('#modalDragonTiger1Dayresult').hide();


    }

    showRulesPoker() {
        $('#modalrulesPokerteenpatti').show();

    }
    showdragonTigerRules() {
        $('#modaldragonTiger').show();

    }

    closedragonTigerRules() {
        $('#modaldragonTiger').hide();

    }

    closePopupRulesPoker() {
        $('#modalrulesPokerteenpatti').hide();

    }


    trackByFn(index, item) {
        return index; // or item.id
    }

    suspendedClass(selectionStatus, marketStatus){
          
        if((selectionStatus =='ACTIVE' || selectionStatus =='OPEN' || selectionStatus =='1' || selectionStatus =='True') || (marketStatus =='ACTIVE' || marketStatus =='OPEN' || marketStatus =='1' || marketStatus =='True')){
            return '';
        }
        else{
            return 'suspended';
        }
    }
    suspendedText(selectionStatus, marketStatus){

        if((selectionStatus =='ACTIVE' || selectionStatus =='OPEN' || selectionStatus =='1' || selectionStatus =='True') || (marketStatus =='ACTIVE' || marketStatus =='OPEN' || marketStatus =='1' || marketStatus =='True')){
            return false;
        }
        else{
            return true;
        }
    }
    suspendedMarketText(marketStatus){

        if(marketStatus =='ACTIVE' || marketStatus =='OPEN' || marketStatus =='1' || marketStatus =='True'){
            return false;
        }
        else{
            return true;
        }
    }
    ShowTextStatus(value){
        if(value =='CLOSED'){
            return 'CLOSED';
        }
        else{
            return 'SUSPENDED'
        }

    }
    public minMaxDetails;
    showMinMax(matchDetail) {
        this.minMaxDetails= matchDetail;
        $('#minMaxPopUp').modal('show');
    }
    closeMinMax() {
       
        $('#minMaxPopUp').modal('hide');
    }
}
