import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "../View/layout/dashboard/dashboard.component";
import { SubdashboardComponent } from "../View/layout/subdashboard/subdashboard.component";
import { NotFoundComponentComponent } from "../View/Pages/not-found-component/not-found-component.component";
import { UnderMaintinanceComponent } from "../View/Pages/under-maintinance/under-maintinance.component";
import { AuthGuard } from "../guards/auth-guard.service";
import { VirtualGamesComponent } from "../View/Pages/virtual-games/virtual-games.component";

const routes: Routes = [
  {
    path: "",
    // redirectTo: '/login',
    loadChildren: "src/app/View/Pages/guest-home/home.module#HomeModule",
    // pathMatch: 'full'
  },
  {
    path: "login",
    loadChildren: "src/app/View/Pages/login/login.module#LoginModule",
  },
  { path: "UnderMaintinance", component: UnderMaintinanceComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    loadChildren:
      "src/app/View/layout/dashboard/dashboard.module#DashboardModule",
    component: DashboardComponent,
  },
  {
    path: "subdashboard",
    canActivate: [AuthGuard],
    loadChildren:
      "src/app/View/layout/subdashboard/subdashboard.module#SubdashboardModule",
    component: SubdashboardComponent,
  },
  { path: "404", component: NotFoundComponentComponent },
  { path: "**", component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
