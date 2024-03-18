import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login.routing.module';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {LoginserviceService} from '../../../Service/User/loginservice.service';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';




@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule
    ],
    declarations: [LoginComponent],
    providers: [LoginserviceService]
})
export class LoginModule { }
