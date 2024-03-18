import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedGamesComponent } from './selected-games.component';
import { SelectedGamesRoutingModule } from './selected-games.routing';

@NgModule({
  declarations: [SelectedGamesComponent],
  imports: [
    CommonModule,
    SelectedGamesRoutingModule
  ]
})
export class SelectedGamesModule { }
