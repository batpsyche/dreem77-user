import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasinoHistoryComponent } from './casino-history.component';
import { CasinoHistoryRouting } from './casino.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [CasinoHistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgxPaginationModule,
    CasinoHistoryRouting
  ]
})
export class CasinoHistoryModule { }
