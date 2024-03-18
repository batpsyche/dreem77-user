import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QTGamesRoutingModule } from './qt-games.routing';
import { QtGamesComponent } from './qt-games.component';

@NgModule({
  declarations: [QtGamesComponent],
  imports: [
    CommonModule,
    QTGamesRoutingModule
  ]
})
export class QtGamesModule { }
