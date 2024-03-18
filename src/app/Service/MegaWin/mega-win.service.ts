import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Globals } from "src/app/Model/global";

@Injectable({
    providedIn: 'root'
})
export class MegaWinGameService {
    private UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    private token = this.UserLoginData.token;
    private reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });
    constructor(private http: HttpClient, private globals: Globals) { }
    private BASE_URL = this.globals.Url;

    /**
     * 
     * @param selectedGame takes user_name, name, game_id, device_type 
     * (All Required).
     */
    getGameLaunchURL(selectedGame) {
        return this.http.post(this.BASE_URL + 'megaWinCasino/launchGame', selectedGame, { headers: this.reqHeader });
    }
}