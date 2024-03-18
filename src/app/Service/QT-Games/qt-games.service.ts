import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Globals } from "src/app/Model/global";

@Injectable({
    providedIn: 'root'
})
export class QTGamesService {
    private UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    private token = this.UserLoginData.token;
    private reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });
    constructor(private http: HttpClient, private globals: Globals) {
    }
    private BASE_URL = this.globals.Url;
    getGameToken() {
        return this.http.get(this.BASE_URL + 'qtApi/getToken', { headers: this.reqHeader });
    }

    getGameLaunchUrl(user) {
        return this.http.post(this.BASE_URL + 'qtApi/getGameLaunchUrl', user, { headers: this.reqHeader });
    }

    getGameLobbyUrl(user) {
        return this.http.post(this.BASE_URL + 'qtApi/getGameLobbyUrl', user, { headers: this.reqHeader });
    }
}