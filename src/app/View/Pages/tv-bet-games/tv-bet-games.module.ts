import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvBetGamesComponent } from './tv-bet-games.component';
import { TVBetRoutingModule } from './tv-bet.games.routing';

@NgModule({
  declarations: [TvBetGamesComponent],
  imports: [
    CommonModule,
    TVBetRoutingModule
  ]
})
export class TvBetGamesModule { }
