import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Globals } from "src/app/Model/global";
@Injectable({
    providedIn: 'root'
})
export class CasinoReportService {
    private UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    private token = this.UserLoginData.token;
    private reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });
    constructor(private http: HttpClient, private globals: Globals) { }
    private BASE_URL = this.globals.Url;
    /**
     * @param userDetails takes user_id, user_type_id, page
     */
    getBrinoCasinoReport(userDetails) {
        return this.http.post(this.BASE_URL + 'casinoGamesReport/plReport', userDetails, { headers: this.reqHeader });
    }
}