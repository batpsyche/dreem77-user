import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaWinComponent } from './mega-win.component';
import { MegaWinRoutingModule } from './mega-win.routing.module';

@NgModule({
  declarations: [MegaWinComponent],
  imports: [
    CommonModule,
    MegaWinRoutingModule
  ]
})
export class MegaWinModule { }
