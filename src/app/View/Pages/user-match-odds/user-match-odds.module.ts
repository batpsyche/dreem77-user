import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import {ToastrModule} from 'ng6-toastr-notifications';
import {FormsModule} from '@angular/forms';
import {UserMatchOddsComponent} from './user-match-odds.component';
import {UserMatchOddsRoutingModule} from './user-match-odds.routing.module';
import {MatchService} from '../../../Service/Match/match.service';
import {NgPipesModule} from 'ngx-pipes';




@NgModule({
    imports: [
        CommonModule,
        UserMatchOddsRoutingModule,
        OrderModule,
        ToastrModule.forRoot(),
        FormsModule,
        NgPipesModule


    ],
    declarations: [UserMatchOddsComponent],
    providers: [MatchService]
})
export class UserMatchOddsModule { }
