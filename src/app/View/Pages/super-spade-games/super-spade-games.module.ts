import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperSpadeGamesComponent } from './super-spade-games.component';
import { SuperSpadeRoutingModule } from './super-spade-games.routing';

@NgModule({
  declarations: [SuperSpadeGamesComponent],
  imports: [
    CommonModule,
    SuperSpadeRoutingModule
  ]
})
export class SuperSpadeGamesModule { }
