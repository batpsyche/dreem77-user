import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasinoHistoryComponent } from './casino-history.component';


const routes: Routes = [
    {
        path: '',
        component: CasinoHistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasinoHistoryRouting { }
