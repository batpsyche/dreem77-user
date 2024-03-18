import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BethistoryComponent} from './bethistory.component';



const routes: Routes = [
    { path: '', component: BethistoryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BethistoryRoutingModule { }
