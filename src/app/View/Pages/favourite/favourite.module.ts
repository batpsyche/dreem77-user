import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule} from '@angular/forms';
import {MatchService} from '../../../Service/Match/match.service';
import {FavouriteComponent} from './favourite.component';
import {FavouriteRoutingModule} from './favourite.routing.module';



@NgModule({
    imports: [
        CommonModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        FavouriteRoutingModule
    ],
    declarations: [FavouriteComponent],
    providers: [MatchService]
})
export class FavouriteModule { }
