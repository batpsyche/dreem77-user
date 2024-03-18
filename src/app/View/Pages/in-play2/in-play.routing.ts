import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InPlayComponent } from './in-play.component';



const routes: Routes = [
    {
        path: '',
        component: InPlayComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InplayRoutingModule { }
