import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EzugiGamesComponent } from './ezugi-games.component';



const routes: Routes = [
    {
        path: '',
        component: EzugiGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EzugiRoutingModule { }
