import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Globals} from '../../../Model/global';
import {MatchService} from '../../../Service/Match/match.service';
import {Router} from '@angular/router';
import { FormBuilder,FormControl, NgForm, FormGroup, Validators } from '@angular/forms';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class ChangePasswordComponent implements OnInit {
  public message: any;
  public userId: string;
  public user_type: any;
  public loginUserData1: any;
  chanPassForm:FormGroup;


  constructor(public router: Router, public globals : Globals,public matchService:MatchService, private formBuilder: FormBuilder, public toastr:ToastrManager) {
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
    this.loginUserData1 =  this.globals.loginUserData;
    this.userId = this.loginUserData1.user_id;
   // this.user_type =  this.loginUserData1.type;
  }
  @Input() loginUserData = { old_password: '', newpassword: '', Renewpassword: '' };
  logout() {
    this.matchService.logout().subscribe((result) => {
      this.matchService.token = null;
      localStorage.clear();
      this.router.navigate(['login']);
      window.location.reload();

    }, (err) => {
    });
  }

  changePassword () {
    this.loginUserData1 = {
      "oldPassword": this.loginUserData.old_password,
      "newPassword": this.loginUserData.newpassword,
      "confirmNewPassword": this.loginUserData.Renewpassword
    }
    this.matchService.changePassword(this.loginUserData1).subscribe((result) => {
        this.message = result.message;
      this.toastr.successToastr(result.message);
      if(!result.error)
        this.logout();
    }, (err) => {
    });
  }

}
