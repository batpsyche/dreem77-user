import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Globals} from '../../Model/global';


@Injectable({
    providedIn: 'root'
})


export class ReportsService {
    public UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
    public token = this.UserLoginData.token;
    reqHeader = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json'

    });

    constructor(private http: HttpClient, private globals: Globals) {

    }
    Base_Url = this.globals.Url;

    getaccountSatement(params): Observable<any> {
        return this.http.post<any>(this.Base_Url + 'accountSatement', params, {headers: this.reqHeader});
    }

    getHistory(params): Observable<any> {
        return this.http.post<any>(this.Base_Url + 'bet/getHistory', params, {headers: this.reqHeader});
    }

    profitLossMatchWise(params): Observable<any> {
        return this.http.post<any>(this.Base_Url + '/report/profitLossMatchWise', params, {headers: this.reqHeader});
    }

    getBetsByMarketId(params): Observable<any> {
        return this.http.post<any>(this.Base_Url + '/bet/getBetsByMarketId', params, {headers: this.reqHeader});
    }

    chipInOutStatement(params): Observable<any> {
        return this.http.post<any>(this.Base_Url + '/accountStatement/chipInOutStatement', params, {headers: this.reqHeader});
    }
}
