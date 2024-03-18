import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllgameiframeComponent, } from './allgameiframe/allgameiframe.component';
import { AllgameiframeRoutingModule } from './allgameiframe.routing';

@NgModule({
  declarations: [AllgameiframeComponent],
  imports: [
    CommonModule,
    AllgameiframeRoutingModule
  ]
})
export class AllgameiframeModule { }
