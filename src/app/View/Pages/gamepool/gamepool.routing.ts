import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamepoolComponent } from './gamepool.component';


const routes: Routes = [
    {
        path: '',
        component: GamepoolComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamepoolRoutingModule { }
