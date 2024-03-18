import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule} from '@angular/forms';
import {MatchService} from '../../../Service/Match/match.service';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {CasinoresultComponent} from './casinoresult.component';
import {CasinoresultRoutingModule} from './casinoresult.routing.module';




@NgModule({
    imports: [
        CommonModule,
        CasinoresultRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot(),
        NgxPaginationModule
    ],
    declarations: [CasinoresultComponent],
    providers: [MatchService]
})
export class CasinoresultModule { }
