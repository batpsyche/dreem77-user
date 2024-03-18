import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ReportsService} from '../../../Service/Records/reports.service';
import {ExcelService} from '../../../Service/excel.service';

@Component({
    selector: 'app-bethistory',
    templateUrl: './bethistory.component.html',
    styleUrls: ['./bethistory.component.scss'],
    providers: [DatePipe]

})
export class BethistoryComponent implements OnInit {

    constructor(private reportsService: ReportsService, private datePipe: DatePipe, public excelService: ExcelService) {
    }

    betHistory: any;
    message: any;
    maxDate: any;
    toDateValue: any;
    myDateValue: Date;
    fromDateValue: any;
    IsBtnActive: any;
    IsBtnTypes: any;
    userDetails: any;
    userId: any;
    config: any;
    page: any;
    loading: any;
    totalrecored: any;
    total_potential_profit: any;
    total_liability: any;

    ngOnInit() {
        this.myDateValue = new Date();
        this.fromDateValue = new Date();
        this.toDateValue = new Date();
        this.maxDate = this.myDateValue;
        this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
        this.userId = this.userDetails.user_id;
        this.IsBtnTypes = 'M';
        this.IsBtnActive = 1;
        this.page = 1;

        this.getHistory(1);
    }

    trackByFn(index, item) {
        return index; // or item.id
    }

    FilterBetHistory(val, ind) {
        this.IsBtnTypes = val;
        this.IsBtnActive = ind;
        this.getHistory(1);

    }

    ResetAll() {
        this.myDateValue = new Date();
        this.fromDateValue = new Date();
        this.toDateValue = new Date();
        this.maxDate = this.myDateValue;
        this.IsBtnTypes = 'M';
        this.IsBtnActive = 1;
        this.getHistory(1);

    }

    pageChange(newPage: number) {
        this.page = newPage;
        this.getHistory(this.page);
    }

    getHistory(page) {
        var sportdata = {
            'user_id': this.userId,
            'userTypeId': this.userDetails.user_type_id,
            'fromDate': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'toDate': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            'page': page,
            'matchType': this.IsBtnTypes
        };
        this.reportsService.getHistory(sportdata).subscribe(response => {
            this.loading = false;
            if (!response.error) {
                this.betHistory = response.data.data;

                if (page == 1) {
                    this.totalrecored = response.data.total;
                    this.total_potential_profit = response.data.valuesSum.total_potential_profit;
                    this.total_liability = response.data.valuesSum.total_liability;
                }
                this.config = {
                    currentPage: page,
                    itemsPerPage: response.data.limit,
                    totalItems: this.totalrecored
                };
            }
        }, error => {
            this.loading = false;
        });
    };

    downloadCsv() {
        var sportdata = {
            'user_id': this.userId,
            'userTypeId': this.userDetails.user_type_id,
            'fromDate': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'toDate': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            'page': 1,
            'matchType': this.IsBtnTypes,
            is_download: '1'
        };
        this.reportsService.getHistory(sportdata).subscribe(response => {
            if (!response.error) {
                this.betHistory = response.data.data;
                let excelAccount = [];
                for (let i = 0; i < response.data.data.length; i++) {
                    if (this.IsBtnActive == 1) {
                        var obj = {
                            'Placed': this.datePipe.transform((response.data.data[i].placed * 1000), 'yyyy-MM-dd HH:mm'),
                            'Description': (response.data.data[i].match_name) + '-' + (response.data.data[i].selection_name) + '- Bet ID:' + (response.data.data[i].bet_id) + '| Placed:' + this.datePipe.transform((response.data.data[i].placed * 1000), 'yyyy-MM-dd HH:mm'),
                            'USERNAME': response.data.data[i].name + '(' + response.data.data[i].user_name + ')',
                            'Type': (response.data.data[i].is_back == '1' ? 'Back' : 'Lay'),
                            'Odds': (response.data.data[i].odds),
                            'Stack': (response.data.data[i].stack),
                            'Liability': (response.data.data[i].liability),
                            'Potential Profit': (response.data.data[i].profit_loss),
                            'Ip Address': (response.data.data[i].ip_address),
                        };
                        excelAccount.push(obj);

                    } else if (this.IsBtnActive == 3) {
                        var obj1 = {
                            'Placed': this.datePipe.transform((response.data.data[i].placed * 1000), 'yyyy-MM-dd HH:mm'),
                            'Description': (response.data.data[i].match_name) + '-' + (response.data.data[i].selection_name) + '- Bet ID:' + (response.data.data[i].bet_id) + '| Placed:' + this.datePipe.transform((response.data.data[i].placed * 1000), 'yyyy-MM-dd HH:mm'),
                            'Type': (response.data.data[i].is_back == '1' ? 'Back' : 'Lay'),
                            'Odds': (response.data.data[i].odds),
                            'Stack': (response.data.data[i].stack),
                            'Liability': (response.data.data[i].liability),
                            'PROFIT/LOSS': (response.data.data[i].profit_loss),
                            'STATUS': (response.data.data[i].status),
                            'Ip Address': (response.data.data[i].ip_address),
                        };
                        excelAccount.push(obj1);

                    }
                }
                this.excelService.exportAsExcelFile(excelAccount, 'betHistory');

            }
        }, error => {
            this.loading = false;
        });
    }

}

