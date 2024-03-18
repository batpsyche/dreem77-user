import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MegaWinComponent } from './mega-win.component';





const routes: Routes = [
    {
        path: '',
        component: MegaWinComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MegaWinRoutingModule { }
