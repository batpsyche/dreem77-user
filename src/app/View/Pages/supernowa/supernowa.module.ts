import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupernowaComponent } from './supernowa/supernowa.component';
import { SupernowaRoutingModule } from './supernowa.routing';

@NgModule({
  declarations: [SupernowaComponent],
  imports: [
    CommonModule,
    SupernowaRoutingModule
  ]
})
export class SupernowaModule { }
