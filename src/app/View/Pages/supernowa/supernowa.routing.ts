import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupernowaComponent } from './supernowa/supernowa.component';


const routes: Routes = [
    {
        path: '',
        component: SupernowaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupernowaRoutingModule { }
