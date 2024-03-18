import { Component, OnInit } from '@angular/core';
import {Globals} from '../../../Model/global';
import {LoginserviceService} from '../../../Service/User/loginservice.service';
import {MatchService} from '../../../Service/Match/match.service';
import {ToastrManager} from 'ng6-toastr-notifications';
declare var $:any;
import { FormBuilder,FormControl, NgForm, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public userDetails: any;
  public terms: any;
  Flogo = './assets/loginimages/Flogo.png';
  message;
  old_password;
  newpassword;
  Renewpassword;
  loginUserData1;
  footerLogo;
  chanPassForm:FormGroup;
  constructor(public matchService: MatchService ,public globals: Globals, public loginService: LoginserviceService,public toastr: ToastrManager, private formBuilder: FormBuilder) {
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    this.terms = this.userDetails.terms_conditions;
    this.chanPassForm = formBuilder.group({
      old_password: ['', Validators.required],
      newpassword: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d@$!%*#?&]{6,}$')
      ]],
      Renewpassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.footerLogo = this.globals.Url + 'uploads/footer.png';

    if(this.userDetails.is_change_password == '1')
      $('#changePass').show();
  }
  changePassword () {
    this.loginUserData1 = {
      "oldPassword": this.old_password,
      "newPassword": this.newpassword,
      "confirmNewPassword":this.Renewpassword
    }
    this.matchService.changePassword(this.loginUserData1).subscribe((result) => {
      this.message = result.message;
      if(!result.error){
        this.userDetails.is_change_password='0';
        localStorage.setItem('UserLoginData',JSON.stringify(this.userDetails));
        $('#changePass').hide();
      }else {
        this.toastr.errorToastr(result.message);

      }
    }, (err) => {

    });
  }
}
