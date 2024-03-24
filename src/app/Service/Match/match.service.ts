import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Globals } from "../../Model/global";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  public loginUserData:
    | string
    | any
    | {
        old_password: string;
        newpassword: string;
        Renewpassword: string;
        user_id: string;
        user_type: any;
      };
  public user: any;

  public UserLoginData =
    JSON.parse(localStorage.getItem("UserLoginData")) ||
    this.globals.getVisitor();
  public token = this.UserLoginData.token;
  reqHeader = new HttpHeaders({
    Authorization: "Bearer " + this.token,
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private globals: Globals) {
    this.loginUserData = this.globals.loginUserData;
  }
  Base_Url = this.globals.Url;

  GetSoprtName(param): Observable<any> {
    return this.http.post<any>(this.Base_Url + "getAllSports", param, {
      headers: this.reqHeader,
    });
  }
  getSeriesLst(SportID: any): Observable<any> {
    return this.http.post<any>(this.Base_Url + "getAllSeries", SportID, {
      headers: this.reqHeader,
    });
  }
  getMatchname(): Observable<any> {
    return this.http.get<any>("https://score.crakex.in:3290/tv_code");
  }

  getUserFavouriteMatchLst(SportData): Observable<any> {
    return this.http.post<any>(this.Base_Url + "homematches", SportData, {
      headers: this.reqHeader,
    });
  }
  getGamesPool(): Observable<any> {
    return this.http.get<any>(this.Base_Url + "letplay/gameList", {
      headers: this.reqHeader,
    });
  }
  gotoGameURL(params): Observable<any> {
    return this.http.post<any>(this.Base_Url + "letplay/getGameUrl", params, {
      headers: this.reqHeader,
    });
  }
  deleteUserbet(betId, UsereID): Observable<any> {
    return this.http.get<any>(
      this.Base_Url + "/Betentrycntr/deleteGetbetting/" + betId + "/" + UsereID,
      { headers: this.reqHeader }
    );
  }

  setFavorite(matchdata): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "addMarketFavourite",
      matchdata,
      { headers: this.reqHeader }
    );
  }
  setUnFavorite(matchdata): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "addMarketFavourite",
      matchdata,
      { headers: this.reqHeader }
    );
  }

  getChipDatabyId(): Observable<any> {
    return this.http.get<any>(this.Base_Url + "getUserBalance", {
      headers: this.reqHeader,
    });
  }
  matchDetails(params): Observable<any> {
    return this.http.post<any>(this.Base_Url + "matchDetails", params, {
      headers: this.reqHeader,
    });
  }
  getAllFavouriteMarket(): Observable<any> {
    return this.http.get<any>(this.Base_Url + "getAllFavouriteMarket", {
      headers: this.reqHeader,
    });
  }
  getUserMatchStack(): Observable<any> {
    return this.http.get<any>(this.Base_Url + "getUserMatchStack", {
      headers: this.reqHeader,
    });
  }
  updateUserMatchStack(param): Observable<any> {
    return this.http.post<any>(this.Base_Url + "updateUserMatchStack", param, {
      headers: this.reqHeader,
    });
  }
  updateUserOneClickStack(param): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "updateUserOneClickStack",
      param,
      { headers: this.reqHeader }
    );
  }
  saveBet(params): Observable<any> {
    return this.http.post<any>(this.Base_Url + "bet/saveBet", params, {
      headers: this.reqHeader,
    });
  }
  saveFancyBet(params): Observable<any> {
    return this.http.post<any>(this.Base_Url + "bet/saveFancyBet", params, {
      headers: this.reqHeader,
    });
  }
  getBetsByMatchId(params): Observable<any> {
    return this.http.post<any>(this.Base_Url + "bet/getBetsByMatchId", params, {
      headers: this.reqHeader,
    });
  }
  getAllBets(): Observable<any> {
    return this.http.post<any>(this.Base_Url + "bet/getAllBets", "", {
      headers: this.reqHeader,
    });
  }
  GetScoreApi(matchId): Observable<any> {
    return this.http.post<any>(this.Base_Url + "scoreBoard", matchId, {
      headers: this.reqHeader,
    });
  }
  searchMatchList(reportData: any): Observable<any> {
    return this.http.get<any>(
      this.Base_Url + "searchMatches?search=" + reportData,
      { headers: this.reqHeader }
    );
  }
  logout(): Observable<any> {
    return this.http.post<any>(this.Base_Url + "logout", "", {
      headers: this.reqHeader,
    });
  }

  getAllActiveNotifications(param): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "notifications/getAllActiveNotifications",
      param,
      { headers: this.reqHeader }
    );
  }

  changePassword(loginUserData): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "updatePassword",
      loginUserData,
      { headers: this.reqHeader }
    );
  }
  teenPattiMarketResult(loginUserData): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "result/teenPattiMarketResult",
      loginUserData,
      { headers: this.reqHeader }
    );
  }
  marketResultListByMatchId(loginUserData): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "result/marketResultListByMatchId",
      loginUserData,
      { headers: this.reqHeader }
    );
  }
  marketResultListByMatchIdWithOutPagination(loginUserData): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "result/marketResultListByMatchIdWithOutPagination",
      loginUserData,
      { headers: this.reqHeader }
    );
  }
  getLiveSportMatchList(loginUserData): Observable<any> {
    return this.http.post<any>(
      this.Base_Url + "matches/getLiveSportMatchList",
      loginUserData,
      { headers: this.reqHeader }
    );
  }
  getCups() {
    return this.http.post(
      this.Base_Url + "matches/getCups",
      {},
      { headers: this.reqHeader }
    );
  }
  getTVUrls() {
    return this.http.get(this.Base_Url + "gettvurl", {
      headers: this.reqHeader,
    });
  }
}
