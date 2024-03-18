import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule} from '@angular/forms';
import {MatchService} from '../../../Service/Match/match.service';
import {BethistoryComponent} from './bethistory.component';
import {BethistoryRoutingModule} from './bethistory.routing.module';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
    imports: [
        CommonModule,
        BethistoryRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [BethistoryComponent],
    providers: [MatchService]
})
export class BethistoryModule { }
