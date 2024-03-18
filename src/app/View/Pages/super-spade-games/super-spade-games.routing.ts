import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSpadeGamesComponent } from './super-spade-games.component';


const routes: Routes = [
    {
        path: '',
        component: SuperSpadeGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuperSpadeRoutingModule { }
