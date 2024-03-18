import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzugiRoutingModule } from './ezugi.routing';
import { EzugiGamesComponent } from './ezugi-games.component';

@NgModule({
  declarations: [EzugiGamesComponent],
  imports: [
    CommonModule,
    EzugiRoutingModule
  ]
})
export class EzugiGamesModule { }
