import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QtGamesComponent } from './qt-games.component';


const routes: Routes = [
    {
        path: '',
        component: QtGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QTGamesRoutingModule { }
