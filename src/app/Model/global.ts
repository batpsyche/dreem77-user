import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class Globals {
  Url;
  super_admin_commission_type;
  static Back = "Back";
  static Lay = "Lay";
  public loginUserData;
  public oneClickSelectedBet;
  public IsToggle;
  public btnActive;
  private reqHeader: HttpHeaders;
  public userData: any;
  public token: any;
  public PdcData: any;
  constructor() {
    this.Url = environment.APIEndpoint;
    this.loginUserData = JSON.parse(localStorage.getItem("UserLoginData"));
    this.reqHeader = new HttpHeaders({
      Authorization: localStorage.getItem("TokenId"),
    });
  }
  setUser(userData: any) {
    this.userData = userData;
  }

  getUser() {
    return this.userData;
  }

  getVisitor() {
    return {
      name: "testu",
      user_name: "testu",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjU4OTEsInJvbGUiOiJBZG1pblRlc3QiLCJwYXJlbnRfaWQiOiIwLDAsMCwxIiwidXNlcl90eXBlX2lkIjo1fSwiaWF0IjoxNzEwNTkxMTcxfQ.5ZAKiB_JTpaFdpqKia7b4228fCqO4EOiCDTrgbwKJv8",
      user_id: 5891,
      user_type_id: 5,
      is_change_password: "0",
      is_signup_user: "0",
      stack: "100,200,500,1000,2000",
      one_click_stack: "50,200,300",
      lastLoginTime: 1710587026,
      terms_conditions:
        "<ul><li>In valid bets will be deleted automatically or manually and there will be no claim available for such bets </li><li>In case  of any dispute , Admin has to right to take the final decision </li><li>In a cancelled/NO Result / Abondened  match all bets will be cancelled </li><li>If a  match got  cancelled due to rain, all completed fancy/session market will be settled </li><li>invalid  bets(bets with unfair rate) can be  deleted even after settling . There  will be no claim </li><li>There can be some technical issue in the software. Admin is not reponsible for such case. Play at your own risk </li><li>In case of a tied match, all completed session markets will be settled </li></ul>",
    };
  }
}
