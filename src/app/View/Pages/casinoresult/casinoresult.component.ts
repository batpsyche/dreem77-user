import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../../../Service/Records/reports.service';
import {DatePipe} from '@angular/common';
import {ExcelService} from '../../../Service/excel.service';
import {MatchService} from '../../../Service/Match/match.service';
declare var $: any;

@Component({
  selector: 'app-casinoresult',
  templateUrl: './casinoresult.component.html',
  styleUrls: ['./casinoresult.component.scss'],
  providers: [DatePipe]

})
export class CasinoresultComponent implements OnInit {
  card_dataArray1: any;
  card_dataArray: any;
  card_data: any;
  aall: any;
  ball: any;
  message: any;
  maxDate: any;
  toDateValue: any;
  myDateValue: Date;
  fromDateValue: any;
  userDetails: any;
  userId: any;
  loading: any;
  config: any;
  page: any;
  totalrecored: any;
  creditDebitSum: any;
  balanceSum: any;
  casinoReportData: any;
  P_LFilter: any;
  sportsValues;
  Round_id;
  constructor(private sportservice: ReportsService, private datePipe: DatePipe, public excelService: ExcelService,public matchservice:MatchService) {
  }

  ngOnInit() {

    this.myDateValue = new Date();
    this.fromDateValue = new Date();
    this.toDateValue = new Date();
    this.maxDate = this.myDateValue;
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    this.userId = this.userDetails.user_id;
    this.page = 1;
    this.Round_id = '';

    this.getLiveSportMatchList();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  pageChange(newPage: number) {
    this.page = newPage;
    this.getcasinoReports(this.page);
  }



  getLiveSportMatchList() {
    let param = {
      status: 1
    };
    this.matchservice.getLiveSportMatchList(param).subscribe((data) => {

      this.sportsValues = data.data;
      this.P_LFilter = this.sportsValues[0].match_id;
    }, (err) => {
    });
  }
  getcasinoReports(page) {
    var sportdata = {
      'date': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
      'pageno': page,
      'match_id': this.P_LFilter,
      'market_id': this.Round_id

    };
    this.matchservice.marketResultListByMatchIdWithOutPagination(sportdata).subscribe(response => {
      this.loading = false;
      if (!response.error) {
        this.casinoReportData = response.data.list;
        if (this.casinoReportData != null) {
          if (page == 1) {
            this.totalrecored = response.data.total;
          }
          this.config = {
            currentPage: page,
            itemsPerPage: response.data.limit,
            totalItems: this.totalrecored
          };
        }
      }
    }, error => {
      this.loading = false;
    });
  }

  openResultPopup(result){
    if(result.match_id == -7){
      this.showResults1(result);
    }else {
      this.showResults(result);
    }

  }
  showResults(result) {
    debugger
    let marketData = {
      market_id: result.market_id
    };
    this.matchservice.teenPattiMarketResult(marketData).subscribe(response => {
      if (!response.error) {
        this.card_dataArray = response.data;
        this.card_data = JSON.parse(response.data.card_data);
        $('#modalpokerresult').show();

      }
    }, error => {
    });
  }

  showResults1(result) {
    debugger
    let marketData = {
      market_id: result.market_id
    };
    this.matchservice.teenPattiMarketResult(marketData).subscribe(response => {
      if (!response.error) {
        this.card_dataArray1 = response.data;
        this.card_data = JSON.parse(response.data.card_data);
        this.aall = this.card_data.aall.split(',');;
        this.ball = this.card_data.ball.split(',');;
        $('#modalandarbaharresult').show();

      }
    }, error => {
    });
  }

  closePopupResult() {
    $('#modalpokerresult').hide();

  }
  closePopupAndarResult() {
    $('#modalandarbaharresult').hide();

  }

}

