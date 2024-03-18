import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Globals } from "src/app/Model/global";

@Injectable({
    providedIn: 'root'
})
export class TVBetService {
    public UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    public token = this.UserLoginData.token;
    Base_Url = this.globals.Url;
    reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });
    constructor(private http: HttpClient, private globals: Globals) { }

    getTVBetToken(): Observable<any> {
        debugger
        return this.http.post<any>(this.Base_Url + 'tvbet/AuthToken', {token:this.token}, { headers: this.reqHeader });
    }
}