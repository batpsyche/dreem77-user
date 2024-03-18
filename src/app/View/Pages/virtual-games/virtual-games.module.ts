import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualGamesComponent } from './virtual-games.component';
import { VirtualGamesRoutingModule } from './virtual-games.routing.module';

@NgModule({
    imports: [
        CommonModule,
        VirtualGamesRoutingModule
    ],
    declarations: [VirtualGamesComponent]
})
export class VirtualGamesModule { }
