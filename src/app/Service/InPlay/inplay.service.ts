import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Globals } from "src/app/Model/global";
import { InPlay } from "src/app/Model/in-play";
@Injectable({
    providedIn: 'root'
})
export class InplayService {
    private UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    private token = this.UserLoginData.token;
    private reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });
    constructor(private http: HttpClient, private globals: Globals) {

    }
    private BASE_URL = this.globals.Url;

    getInplayMatches() {
        return this.http.post<InPlay>(this.BASE_URL + 'homeInplayMatches', {}, { headers: this.reqHeader });
        
    }

}