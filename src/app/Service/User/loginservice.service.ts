import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Globals} from '../../Model/global';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  reqHeader1 = new HttpHeaders ({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,private global:Globals) { }

  Base_Url = this.global.Url;



  submitUser (userData): Observable<any> {
    return this.http.post<any>(  this.Base_Url+'userLogin', userData, {headers: this.reqHeader1});
  }

  logout (): Observable<any> {
    return this.http.post<any>( this.Base_Url+'logout','', {headers: this.reqHeader1});
  }



  checkMaintenanceSetting (): Observable<any> {
    return this.http.get<any>( this.Base_Url+'checkMaintenanceSetting',{ headers : this.reqHeader1});
  }
  globalConstant(): Observable<any> {
    return this.http.get<any>( this.Base_Url+'globalConstant',{ headers : this.reqHeader1});
  }

}
