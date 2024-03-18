import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamepoolComponent } from './gamepool.component';
import { GamepoolRoutingModule } from './gamepool.routing';

@NgModule({
  declarations: [GamepoolComponent],
  imports: [
    CommonModule,
    GamepoolRoutingModule
  ]
})
export class GamepoolModule { }
