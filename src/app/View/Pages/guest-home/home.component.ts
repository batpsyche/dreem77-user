import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatchService } from "../../../Service/Match/match.service";
import { resolve } from "q";
import { ActivatedRoute, Router } from "@angular/router";
import { Match } from "../../../Model/match";
import { Globals } from "../../../Model/global";
import { RightbarComponent } from "../../Partial/rightbar/rightbar.component";

@Component({
  selector: "guest-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [RightbarComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  public terms: any;
  public userDetails: any;
  public GetMatchData: any = [];
  public callSport: number;
  public timer: any;
  public calltype: number;
  public arrayObj: any = [];
  public SportId: any;
  public SeriesId: any;
  public callSport1: number;
  public GetMatchDatalength: any;
  fetchMatchListTime: any;
  SportName: any;
  logo: any;

  constructor(
    public matchModel: Match,
    public matchservice: MatchService,
    public rightbar: RightbarComponent,
    public router: Router,
    public globals: Globals,
    public route: ActivatedRoute
  ) {
    this.calltype = 1;
    this.callSport1 = 1;
    this.callSport = 1;
    this.router.errorHandler = (error: any) => {
      this.router.navigate(["NotFound"]); // or redirect to default route
    };
    this.route.queryParams.subscribe((params) => {
      this.SportName = localStorage.getItem("Sportname")
        ? localStorage.getItem("Sportname")
        : "Cricket";

      this.SportId = params["SportId"];

      if (params.SportId === "cup") {
        clearTimeout(this.timer);
        this.getCups();
      } else {
        clearTimeout(this.timer);
        this.SeriesId = params["Seriesid"];
        localStorage.setItem("SportId", this.SportId ? this.SportId : 4);
        localStorage.setItem("SeriesId", this.SeriesId ? this.SeriesId : 0);
        this.SportName = localStorage.getItem("Sportname")
          ? localStorage.getItem("Sportname")
          : "Cricket";
        if (this.SportId == undefined) {
          this.SportId = 4;
        }
        this.callDashboardData();
      }
    });
  }

  ngOnInit() {
    this.router.navigate(["dashboard/home"]);
    this.logo = this.globals.Url + "uploads/logo.png";
    this.userDetails = this.globals.getUser()
      ? this.globals.getUser()
      : this.globals.getVisitor();
    // this.terms = this.globals.getVisitor();
    this.terms = this.userDetails.terms_conditions;
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
  getCups() {
    this.matchservice.getCups().subscribe(
      (response: any) => {
        console.log(this.SportName);
        this.GetMatchData = response.data;
        if (this.GetMatchData != null) {
          this.GetMatchDatalength = this.GetMatchData.length;
        } else {
          this.GetMatchDatalength = 0;
        }
      },
      (err) => {
        if (err.code) {
          this.router.navigate(["login"]);
        }
        /* if (this.router.url.split('?')[0] == '/dashboard/home') {
                    this.timer = setTimeout(() => resolve(this.getCups()), 2000);
                } */
      }
    );
  }

  callDashboardData() {
    this.fetchMatchListTime = 1;
    if (this.SportId == "cup" && this.SeriesId == undefined) {
      this.getCups();
    } else {
      this.getMatchLst();
    }
  }

  setUnfavourite(marketId) {
    this.rightbar.setUnfavourite(marketId);
  }

  setfavourite(marketId) {
    this.rightbar.setfavourite(marketId);
  }

  gotoUserMatchOddsPage(Match) {
    localStorage.setItem("selectedMatch", JSON.stringify(Match));
    this.router.navigate(["/dashboard/UserMatchOdds"], {
      queryParams: { ValCrick: 4 },
    });
  }

  getMatchLst() {
    this.SportName = localStorage.getItem("Sportname")
      ? localStorage.getItem("Sportname")
      : "Cricket";

    var data = {
      sport_id: "" + localStorage.getItem("SportId"),
      series_id: "" + localStorage.getItem("SeriesId"),
    };
    this.matchservice.getUserFavouriteMatchLst(data).subscribe(
      (data) => {
        this.GetMatchData = data.data;
        this.fetchMatchListTime = 2;
        if (this.GetMatchData != null) {
          this.GetMatchDatalength = this.GetMatchData.length;
        } else {
          this.GetMatchDatalength = 0;
        }
      },
      (err) => {
        if (err.code == 412) {
          this.router.navigate(["login"]);
        }

        if (this.router.url.split("?")[0] == "/dashboard/home") {
          this.timer = setTimeout(() => resolve(this.getMatchLst()), 2000);
        }
      },
      () => {
        if (this.router.url.split("?")[0] == "/dashboard/home") {
          this.timer = setTimeout(() => resolve(this.getMatchLst()), 2000);
        }
      }
    );
    //}
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  CallBackLay(price, isback, name, id, marketid, index, marketitem) {
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
      is_session_fancy: "N",
    };
    this.matchModel.isbetslipshow = true;
    localStorage.setItem("betList", JSON.stringify(this.arrayObj));
    this.matchModel.setUser(this.arrayObj);
    this.rightbar.getBetSlipDataForOdds();
  }

  gotoTeenPattiLive() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -151, "matchUserId ": 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -151 },
    });
  }

  gotoUpLive() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -156, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -156 },
    });
  }
  gotoAndarLive() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -157, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -157 },
    });
  }

  gotoCasinoLive() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -158, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -158 },
    });
  }

  gotoTeenPattiVirtual() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -1002, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -1002 },
    });
  }

  gotoUpVirtal() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -1005, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -1005 },
    });
  }

  gotoTeenPattiTwintyVirtual() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -1003, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -1003 },
    });
  }

  goToAndarBhar() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -7, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -7 },
    });
  }
  goToTeenPatti2020() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -1, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -1 },
    });
  }
  goToOneDayTeenPatti() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -2, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -2 },
    });
  }
  goToTestTeenPatti() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -3, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -3 },
    });
  }
  goToLucky7() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -145, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -145 },
    });
  }
  goTo2020Poker() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -4, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -4 },
    });
  }
  goToOneDayPoker() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -5, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -5 },
    });
  }
  goToCasinoGame(id) {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: id, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: id },
    });
  }

  gotoCasinoVirtal() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -1001, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -1001 },
    });
  }
  gotoAndarVirtal() {
    localStorage.setItem(
      "selectedMatch",
      JSON.stringify({ match_id: -1004, user_id: 4314 })
    );
    this.router.navigate(["dashboard/UserMatchOdds"], {
      queryParams: { refresh: -1004 },
    });
  }

  clickOnLogin() {
    this.matchservice.logout().subscribe(
      (result) => {
        window.location.assign("/login");
      },
      (err) => {}
    );
  }
}
