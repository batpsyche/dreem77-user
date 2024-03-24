import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./home.component";
import { OrderModule } from "ngx-order-pipe";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, OrderModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
