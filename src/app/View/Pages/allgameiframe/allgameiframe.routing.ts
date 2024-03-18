import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllgameiframeComponent } from './allgameiframe/allgameiframe.component';


const routes: Routes = [
    {
        path: '',
        component: AllgameiframeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllgameiframeRoutingModule { }
