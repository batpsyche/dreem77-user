import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfitLossMatchComponent} from './profit-loss-match.component';



const routes: Routes = [
    { path: '', component: ProfitLossMatchComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfitLossMatchRoutingModule { }
