import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvBetGamesComponent } from './tv-bet-games.component';


const routes: Routes = [
    {
        path: '',
        component: TvBetGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TVBetRoutingModule { }
