import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BetsMarketComponent} from './bets-market.component';



const routes: Routes = [
    { path: '', component: BetsMarketComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BetsMarketRoutingModule { }
