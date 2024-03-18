import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChipHistoryComponent} from './chip-history.component';



const routes: Routes = [
    { path: '', component: ChipHistoryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChipHistoryRoutingModule { }
