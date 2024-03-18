import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CasinoresultComponent} from './casinoresult.component';



const routes: Routes = [
    { path: '', component: CasinoresultComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasinoresultRoutingModule { }
