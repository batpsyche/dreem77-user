import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CasinoReportService } from 'src/app/Service/CasinoReport/casino-report.service';

interface BetReportData {
  page: number;
  limit: number;
  totalRecords: number;
  data: [];
}
interface ReportData {
  game_type: string;
  from_date: string | Date;
  to_date: string | Date;
}

@Component({
  selector: 'app-brino-casino-history',
  templateUrl: './casino-history.component.html',
  styleUrls: ['./casino-history.component.scss'],
  providers: [DatePipe]
})
export class CasinoHistoryComponent implements OnInit {
  userDetails;
  config = {
    currentPage: 0,
    itemsPerPage: 0,
    totalItems: 0
  };
  betReportData: BetReportData = { page: 1, limit: 50, totalRecords: 0, data: [] };
  reportData: ReportData = {
    game_type: '1',
    from_date: '',
    to_date: ''
  }
  constructor(private brinoCasino: CasinoReportService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.reportData.from_date = new Date();
    this.reportData.to_date = new Date();

    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    this.getReport(this.userDetails, this.betReportData.page, this.reportData.game_type, this.reportData.from_date, this.reportData.to_date);
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
  pageChange(newPage: number) {
    this.betReportData.page = newPage;
    this.getReport(this.userDetails, this.betReportData.page, this.reportData.game_type, this.reportData.from_date, this.reportData.to_date);
  }

  getReport({ user_id, user_type_id }, page, game_type, from_date, to_date) {
    const reportObj = {
      user_id, user_type_id, page, game_type,
      from_date: this.datePipe.transform(from_date, 'yyyy-MM-dd'),
      to_date: this.datePipe.transform(to_date, 'yyyy-MM-dd')
    }
    this.brinoCasino.getBrinoCasinoReport(reportObj).subscribe(
      (response: any) => {
        this.betReportData.data = response.data.data;
        this.betReportData.limit = response.data.limit;
        if (this.betReportData.page === 1) {
          this.betReportData.totalRecords = response.data.total;
        }
        this.config = {
          currentPage: page,
          itemsPerPage: response.data.limit,
          totalItems: this.betReportData.totalRecords
        };
      }, (err) => {
        console.log(err);
      }
    )
  }
  reset() {
    this.betReportData.page = 1;
    this.reportData = {
      game_type: '1',
      from_date: new Date(),
      to_date: new Date()
    };
    this.getReport(this.userDetails, this.betReportData.page, this.reportData.game_type, this.reportData.from_date, this.reportData.to_date);
  }

}
