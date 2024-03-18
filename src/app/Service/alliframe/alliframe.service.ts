import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/Model/global';
@Injectable({
  providedIn: 'root'
})
export class AlliframeService {
  public UserLoginData = JSON.parse(localStorage.getItem('UserLoginData'));
  public token = this.UserLoginData.token;
  Base_Url = this.globals.Url;
  reqHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'

  });
  constructor(private http: HttpClient, private globals: Globals) { }

  getallUserUrl(): Observable<any> {
      //return this.http.post<any>('https://contestgod.com/api/v1/supernowa/Login', {}, { headers: this.reqHeader });
       return this.http.get<any>(this.Base_Url + 'aifApi/getUrl', { headers: this.reqHeader });
  }
}
