import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule} from '@angular/forms';
import {MatchService} from '../../../Service/Match/match.service';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {AccountStatementComponent} from './account-statement.component';
import {AccountStatementRoutingModule} from './account-statement.routing.module';




@NgModule({
    imports: [
        CommonModule,
        AccountStatementRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [AccountStatementComponent],
    providers: [MatchService]
})
export class AccountStatementModule { }
