import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatchService} from '../../../Service/Match/match.service';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {ChangePasswordComponent} from './change-password.component';
import {ChangePasswordRoutingModule} from './change-password.routing.module';




@NgModule({
    imports: [
        CommonModule,
        ChangePasswordRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [ChangePasswordComponent],
    providers: [MatchService]
})
export class ChangePasswordModule { }
