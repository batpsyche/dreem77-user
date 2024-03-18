import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';

import {SubdashboardRoutingModule} from './subdashboard.routing.module';

import {MatchService} from '../../../Service/Match/match.service';
import {ExcelService} from '../../../Service/excel.service';




@NgModule({
    imports: [
        CommonModule,
        SubdashboardRoutingModule,
        OrderModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
        NgxPaginationModule,
        FormsModule,
        ToastrModule.forRoot(),


    ],
    declarations: [ ],
    providers : [MatchService, ExcelService]
})
export class SubdashboardModule { }
