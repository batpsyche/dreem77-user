
import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../../../Service/Records/reports.service';
import {DatePipe} from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-chip-history',
  templateUrl: './chip-history.component.html',
  styleUrls: ['./chip-history.component.scss'],
  providers:[DatePipe]
})
export class ChipHistoryComponent implements OnInit {
  transferStatement:any;
  message: any;
  maxDate :any;
  toDateValue:any
  myDateValue: Date;
  fromDateValue:any;
  userDetails:any;
  userId:any;
  showHistory:any;
  loading:any;
  totalrecored:any;
  config:any;
  constructor(private sportservice: ReportsService,private datePipe:DatePipe) { }

  ngOnInit() {
    this.myDateValue = new Date();
    this.fromDateValue = new Date();
    this.toDateValue = new Date();
    this.maxDate=this.myDateValue;
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    this.userId = this.userDetails.user_id;
    this.gettransferStatement('1');
  }
  ResetAll(){
    this.myDateValue = new Date();
    this.fromDateValue = new Date();
    this.toDateValue = new Date();
    this.maxDate=this.myDateValue;
    this.gettransferStatement('1');

  }
  trackByFn(index, item) {
    return index; // or item.id
  }
  back(){
    window.history.back();
  }
  gettransferStatement(page) {
    var sportdata={
      "user_id":this.userId,
      'from_date':this.datePipe.transform( this.fromDateValue, 'yyyy-MM-dd'),
      'to_date':this.datePipe.transform( this.toDateValue, 'yyyy-MM-dd') ,
      "page" : page

    };
    this.sportservice.chipInOutStatement(sportdata).subscribe(response => {
      this.loading = false;
      if (!response.error) {
        this.transferStatement = response.data.data;
        if(page == 1) {
          this.totalrecored = response.data.total;
        }
        this.config = {
          currentPage: page,
          itemsPerPage: 10,
          totalItems: this.totalrecored
        };
      } else{
        //this.sessionservice.notifier.notify( 'error', response.message );
      }
    }, error => {
      this.loading = false;
    });
  };


}

