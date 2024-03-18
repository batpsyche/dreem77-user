import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualGamesComponent } from './virtual-games.component';




const routes: Routes = [
    {
        path: '',
        component: VirtualGamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VirtualGamesRoutingModule { }
