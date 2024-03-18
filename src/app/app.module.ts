import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app.route';
import { DashboardComponent } from './View/layout/dashboard/dashboard.component';
import { SubdashboardComponent } from './View/layout/subdashboard/subdashboard.component';

import { Match } from './Model/match';
import { Globals } from './Model/global';
import { AuthGuard } from './guards/auth-guard.service';
import { AuthService } from './Service/auth.service';

import { HeaderComponent } from './View/Partial/header/header.component';
import { SidebarComponent } from './View/Partial/sidebar/sidebar.component';
import { FooterComponent } from './View/Partial/footer/footer.component';
import { RightbarComponent } from './View/Partial/rightbar/rightbar.component';

import { NotFoundComponentComponent } from './View/Pages/not-found-component/not-found-component.component';
import { UnderMaintinanceComponent } from './View/Pages/under-maintinance/under-maintinance.component';
import { OrderModule } from 'ngx-order-pipe';
import { TopBarComponent } from './View/Partial/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeaderComponent, SidebarComponent, FooterComponent, RightbarComponent, SubdashboardComponent, NotFoundComponentComponent, UnderMaintinanceComponent, TopBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [Globals, AuthService, Match, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
