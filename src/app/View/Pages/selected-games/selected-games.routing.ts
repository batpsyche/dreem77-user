import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedGamesComponent } from './selected-games.component';



const routes: Routes = [
    {
        path: '',
        component: SelectedGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectedGamesRoutingModule { }
