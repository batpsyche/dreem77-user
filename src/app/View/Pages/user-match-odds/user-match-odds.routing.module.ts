import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMatchOddsComponent} from './user-match-odds.component';



const routes: Routes = [
    { path: '', component: UserMatchOddsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserMatchOddsRoutingModule { }
