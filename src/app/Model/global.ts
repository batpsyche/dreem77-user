import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class Globals {
    Url;
    super_admin_commission_type;
    static Back = 'Back';
    static Lay = 'Lay';
    public loginUserData;
    public oneClickSelectedBet;
    public IsToggle;
    public btnActive;
    private reqHeader: HttpHeaders;
    public userData: any;
    public  token:any;
    public  PdcData:any;
    constructor() {
        this.Url = environment.APIEndpoint;
        this.loginUserData = JSON.parse(localStorage.getItem('UserLoginData'));
        this.reqHeader = new HttpHeaders({
            Authorization: localStorage.getItem('TokenId'),
        });
    }
    setUser(userData: any) {
        this.userData = userData;
    }

    getUser() {
        return this.userData;
    }

}

