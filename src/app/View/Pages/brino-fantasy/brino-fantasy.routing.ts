import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrinoFantasyComponent } from './brino-fantasy.component';


const routes: Routes = [
    {
        path: '',
        component: BrinoFantasyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrinoFantasyRoutingModule { }
