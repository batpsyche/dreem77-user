import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "in-play",
    loadChildren: "src/app/View/Pages/in-play2/in-play.module#InPlayModule",
  },
  {
    path: "in-play-2",
    loadChildren: "src/app/View/Pages/in-play2/in-play.module#InPlayModule",
  },
  {
    path: "home",
    loadChildren: "src/app/View/Pages/home/home.module#HomeModule",
  },
  {
    path: "UserMatchOdds",
    loadChildren:
      "src/app/View/Pages/user-match-odds/user-match-odds.module#UserMatchOddsModule",
  },
  {
    path: "Favourite",
    loadChildren:
      "src/app/View/Pages/favourite/favourite.module#FavouriteModule",
  },
  {
    path: "virtual-games",
    loadChildren:
      "src/app/View/Pages/virtual-games/virtual-games.module#VirtualGamesModule",
  },
  {
    path: "brino-fantasy",
    loadChildren:
      "src/app/View/Pages/brino-fantasy/brino-fantasy.module#BrinoFantasyModule",
  },

  {
    path: "super-spade-games",
    loadChildren:
      "src/app/View/Pages/super-spade-games/super-spade-games.module#SuperSpadeGamesModule",
  },
  {
    path: "gamepool",
    loadChildren: "src/app/View/Pages/gamepool/gamepool.module#GamepoolModule",
  },
  // {
  //     path: 'betsoft',
  //     loadChildren: 'src/app/View/Pages/mega-win/mega-win.module#MegaWinModule'
  // },
  {
    path: "ezugi",
    loadChildren:
      "src/app/View/Pages/ezugi-games/ezugi-games.module#EzugiGamesModule",
  },
  // {
  //     path: 'sa-games',
  //     loadChildren: 'src/app/View/Pages/sa-games/sa-games.module#SaGamesModule'
  // },
  {
    path: "qt-games",
    loadChildren: "src/app/View/Pages/qt-games/qt-games.module#QtGamesModule",
  },
  {
    path: "game",
    loadChildren:
      "src/app/View/Pages/selected-games/selected-games.module#SelectedGamesModule",
  },
  {
    path: "tvbet",
    loadChildren:
      "src/app/View/Pages/tv-bet-games/tv-bet-games.module#TvBetGamesModule",
  },
  {
    path: "supernowa",
    loadChildren:
      "src/app/View/Pages/supernowa/supernowa.module#SupernowaModule",
  },
  {
    path: "all-game",
    loadChildren:
      "src/app/View/Pages/allgameiframe/allgameiframe.module#AllgameiframeModule",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
