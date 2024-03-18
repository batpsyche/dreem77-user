import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../../../Service/Records/reports.service';
import {DatePipe} from '@angular/common';
import {ExcelService} from '../../../Service/excel.service';

declare var $: any;

@Component({
    selector: 'app-account-statement',
    templateUrl: './account-statement.component.html',
    styleUrls: ['./account-statement.component.scss'],
    providers: [DatePipe]

})
export class AccountStatementComponent implements OnInit {
    accountStatement: any;
    message: any;
    maxDate: any;
    toDateValue: any;
    myDateValue: Date;
    fromDateValue: any;
    userDetails: any;
    userId: any;
    user_type_id: any;
    loading: any;
    showHistory: any;
    config: any;
    page: any;
    totalrecored: any;
    creditDebitSum: any;
    balanceSum: any;
    accountStatementData: any;
    P_LFilter: any;

    constructor(private sportservice: ReportsService, private datePipe: DatePipe, public excelService: ExcelService) {
    }

    ngOnInit() {

        this.myDateValue = new Date();
        this.fromDateValue = new Date();
        this.toDateValue = new Date();
        this.maxDate = this.myDateValue;
        this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
        this.userId = this.userDetails.user_id;
        this.user_type_id = this.userDetails.user_type_id;

        this.page = 1;
        this.P_LFilter = 'ALL';

        this.getAcountStatement(1);
    }

    trackByFn(index, item) {
        return index; // or item.id
    }

    pageChange(newPage: number) {
        this.page = newPage;
        this.getAcountStatement(this.page);
    }

    ResetAll() {
        this.myDateValue = new Date();
        this.fromDateValue = new Date();
        this.toDateValue = new Date();
        this.maxDate = this.myDateValue;
        this.getAcountStatement(1);

    }

    getAcountStatement(page) {
        var sportdata = {
            'user_id': this.userId,
            'user_type_id': this.user_type_id,
            'from_date': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'to_date': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            'pageno': page,
            filter: this.P_LFilter

        };
        this.sportservice.getaccountSatement(sportdata).subscribe(response => {
            this.loading = false;
            if (!response.error) {
                this.accountStatementData = response.data;
                if (this.accountStatementData != null) {
                    this.accountStatement = response.data.list;
                    this.balanceSum = response.data.balanceSum;
                    this.creditDebitSum = response.data.creditDebitSum;
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

    downloadCsv() {
        let excelAccount = [];
        var sportdata = {
            'user_id': this.userId,
            'user_type_id': this.user_type_id,
            'from_date': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'to_date': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            'pageno': 1,
            is_download: '1',
            filter: this.P_LFilter
        };
        this.sportservice.getaccountSatement(sportdata).subscribe(response => {
            if (!response.error) {
                for (let i = 0; i < response.data.list.length; i++) {
                    var obj = {
                        'Date': this.datePipe.transform((response.data.list[i].date * 1000), 'yyyy-MM-dd HH:mm'),
                        'UserName': (response.data.list[i].user_name),
                        'Narration': (response.data.list[i].description),
                        'CreditOrDebit': (response.data.list[i].credit_debit),
                        'Balance': (response.data.list[i].balance)
                    }

                    excelAccount.push(obj);
                }
                this.excelService.exportAsExcelFile(excelAccount, 'AccountStmt');

            }
        }, error => {
            this.loading = false;
        });
    }
}

