import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrinoFantasyRoutingModule } from './brino-fantasy.routing';
import { BrinoFantasyComponent } from './brino-fantasy.component';

@NgModule({
  declarations: [BrinoFantasyComponent],
  imports: [
    CommonModule,
    BrinoFantasyRoutingModule
  ]
})
export class BrinoFantasyModule { }
