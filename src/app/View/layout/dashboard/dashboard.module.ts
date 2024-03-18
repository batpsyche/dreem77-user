import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard.routing.module';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {MatchService} from '../../../Service/Match/match.service';



@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),

    ],
    declarations: [  ],
    providers: [MatchService]
})
export class DashboardModule { }
