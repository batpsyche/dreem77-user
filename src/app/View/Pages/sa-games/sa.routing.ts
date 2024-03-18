import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaGamesComponent } from './sa-games.component';



const routes: Routes = [
    {
        path: '',
        component: SaGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SARoutingModule { }
