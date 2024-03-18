import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
    { path: 'Bethistory', loadChildren: 'src/app/View/Pages/bethistory/bethistory.module#BethistoryModule' },
    { path: 'BetsMarket', loadChildren: 'src/app/View/Pages/bets-market/bets-market.module#BetsMarketModule' },
    { path: 'ChipHistory', loadChildren: 'src/app/View/Pages/chip-history/chip-history.module#ChipHistoryModule' },
    { path: 'AccountStatement', loadChildren: 'src/app/View/Pages/account-statement/account-statement.module#AccountStatementModule' }, { path: 'casinoresult', loadChildren: 'src/app/View/Pages/casinoresult/casinoresult.module#CasinoresultModule' },
    { path: 'ProfitLoss', loadChildren: 'src/app/View/Pages/profit-loss-match/profit-loss-match.module#ProfitLossMatchModule' },
    { path: 'changePassword', loadChildren: 'src/app/View/Pages/change-password/change-password.module#ChangePasswordModule' },
    {
        path: 'casino-history',
        loadChildren: 'src/app/View/Pages/casino-history/casino-history.module#CasinoHistoryModule'

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubdashboardRoutingModule { }
