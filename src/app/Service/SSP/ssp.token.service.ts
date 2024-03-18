import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Globals } from "src/app/Model/global";

@Injectable({
    providedIn: 'root'
})
export class SSPTokenService {
    private UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    private token = this.UserLoginData.token;
    private reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });
    constructor(private http: HttpClient, private globals: Globals) {

    }
    private BASE_URL = this.globals.Url;
    /**
     * 
     * @param user takes user_name and name.
     */
    getGameToken(user) {
        return this.http.post(this.BASE_URL + 'superSpade/registration', user, { headers: this.reqHeader });
    }
    
}