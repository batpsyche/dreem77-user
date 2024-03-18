import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ReportsService} from '../../../Service/Records/reports.service';

@Component({
    selector: 'app-bets-market',
    templateUrl: './bets-market.component.html',
    styleUrls: ['./bets-market.component.scss'],
    providers: [DatePipe]
})
export class BetsMarketComponent implements OnInit {
    betHistory: any;
    message: any;
    maxDate: any;
    toDateValue: any;
    myDateValue: Date;
    fromDateValue: any;
    IsBtnActive: any;
    IsBtnTypes: any;
    marketValue: any;

    constructor(private reportService: ReportsService, private datePipe: DatePipe) {
    }

    ngOnInit() {
        this.myDateValue = new Date();
        this.fromDateValue = new Date();
        this.toDateValue = new Date();
        this.maxDate = this.myDateValue;
        this.IsBtnTypes = 'M';
        this.IsBtnActive = 1;
        this.marketValue = JSON.parse(localStorage.getItem('marketValue'));

        this.getBetsByMarketId();
    }

    trackByFn(index, item) {
        return index; // or item.id
    }

    getBetsByMarketId = function () {
        var sportdata = {
            'market_id': this.marketValue.market_id

        };
        this.reportService.getBetsByMarketId(sportdata).subscribe(response => {
            this.loading = false;
            if (!response.error) {
                this.betHistory = response.data;
            }
        }, error => {
            this.loading = false;
        });
    };


}
