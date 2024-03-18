import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SARoutingModule } from './sa.routing';
import { SaGamesComponent } from './sa-games.component';

@NgModule({
  declarations: [SaGamesComponent],
  imports: [
    CommonModule,
    SARoutingModule
  ]
})
export class SaGamesModule { }
