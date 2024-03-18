import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule} from '@angular/forms';
import {MatchService} from '../../../Service/Match/match.service';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {ProfitLossMatchComponent} from './profit-loss-match.component';
import {ProfitLossMatchRoutingModule} from './profit-loss-match.routing.module';





@NgModule({
    imports: [
        CommonModule,
        ProfitLossMatchRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [ProfitLossMatchComponent],
    providers: [MatchService]
})
export class ProfitLossMatchModule { }
