import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountStatementComponent} from './account-statement.component';



const routes: Routes = [
    { path: '', component: AccountStatementComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountStatementRoutingModule { }
