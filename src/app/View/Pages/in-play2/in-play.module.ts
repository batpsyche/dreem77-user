import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InPlayComponent } from './in-play.component';
import { InplayRoutingModule } from './in-play.routing';

@NgModule({
  declarations: [InPlayComponent],
  imports: [
    CommonModule,
    InplayRoutingModule
  ]
})
export class InPlayModule { }
