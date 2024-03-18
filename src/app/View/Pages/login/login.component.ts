import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginserviceService } from '../../../Service/User/loginservice.service';
import { AuthService } from '../../../Service/auth.service';
import { Globals } from '../../../Model/global';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable({
  providedIn: 'root',
})

export class LoginComponent implements OnInit {
  public image: string;
  public terms: Promise<boolean>;
  public showGreeting: boolean;
  public logo: any;
  g_captcha;
  bg_logo;
  password;
  user_name;
  userData;
  apkUrl;
  phone_no;
  social_image;
  footerLogo;
  mobile;
  super_admin_commission_type;
  Flogo = 'assets/loginimages/Flogo.png'
  constructor(private http: HttpClient, private router: Router, private loginservice: LoginserviceService, private auth: AuthService, public global: Globals) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['NotFound']); // or redirect to default route
    }
  }
  private message: any;
  is_show_apk;
  ngOnInit() {
    this.footerLogo = this.global.Url + 'uploads/footer.png';

    this.logo = this.global.Url + 'uploads/logo.png';
    // this.bg_logo = this.global.Url + 'uploads/bg_logo.png';
    // this.bg_logo = this.global.Url + 'uploads/bg_logo.png' || 'assets/loginimages/login-bg.jpg';
   // this.bg_logo = 'assets/loginimages/login-bg.jpg';
    $.getScript('/assets/js/captcha.js');
    this.g_captcha = localStorage.getItem('v3token');
    this.checkMaintenanceSetting();
    this.apkUrl = this.global.Url + 'uploads/app.apk'
    this.social_image = this.global.Url + 'uploads/social_logo.png';
    this.globalConstant();

  }

  checkMaintenanceSetting() {
    this.loginservice.checkMaintenanceSetting().subscribe(response => {
      if (response.code == '1407')
        this.router.navigate(['/UnderMaintinance']);
      else
        this.router.navigate(['/login']);

    }, error => {
    });
  }

  globalConstant() {
    this.loginservice.globalConstant().subscribe(response => {

      this.is_show_apk = response.data.ApkData.is_active;
      this.super_admin_commission_type = response.data.super_admin_commission_type;
      this.mobile = response.data.phone_no;
      this.phone_no = response.data.country_code + ' ' + response.data.phone_no;
      this.global.super_admin_commission_type = this.super_admin_commission_type;
      this.global.PdcData = response.data;
    }, error => {
    });
  }


  onSubmit() {
    debugger
    this.g_captcha = localStorage.getItem('v3token');
    this.userData = {
      user_name: this.user_name,
      password: this.password,
      g_captcha: this.g_captcha
    }
    this.loginservice.submitUser(this.userData).subscribe((result) => {
      if (!result.error) {
        this.global.setUser(this.terms);
        this.global.token = result.data.token;
        this.auth.sendToken(result.data.token)
        localStorage.setItem('UserLoginData', JSON.stringify(result.data));
        localStorage.setItem('TokenId', JSON.stringify(result.data.token));
        // this.router.navigate(['/dashboard/home']);
        this.router.navigate(['/dashboard/in-play']); // New Home 

      } else {

        setTimeout(function () { $.getScript("/assets/js/captcha.js"); }, 1);
        if (result.type != 3) {
          this.showGreeting = true;
          this.message = result.message;
        } else {
          this.showGreeting = true;
          this.message = result.message;
        }
      }
    }, (err) => {

    });
  }
}
