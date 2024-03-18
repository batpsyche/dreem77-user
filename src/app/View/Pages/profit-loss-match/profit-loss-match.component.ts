import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../../../Service/Records/reports.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ExcelService} from '../../../Service/excel.service';
import {Globals} from '../../../Model/global';

@Component({
    selector: 'app-profit-loss-match',
    templateUrl: './profit-loss-match.component.html',
    styleUrls: ['./profit-loss-match.component.scss'],
    providers: [DatePipe]

})
export class ProfitLossMatchComponent implements OnInit {
    profitLoss: any;
    profitLossMatchwise: any;
    message: any;
    hideme = [];
    super_admin_commission_type: any;
    maxDate: any;
    toDateValue: any;
    myDateValue: Date;
    fromDateValue: any;
    userDetails: any;
    userId: any;
    loading: any;
    config: any;
    page: any;

    constructor(private reportService: ReportsService, private router: Router, private datePipe: DatePipe, public excelService: ExcelService, private globals: Globals) {
    }

    ngOnInit() {
        this.myDateValue = new Date();
        this.fromDateValue = new Date();
        this.toDateValue = new Date();
        this.maxDate = this.myDateValue;
        this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
        this.userId = this.userDetails.user_id;
        this.page = 1;
        this.getprofitLossMatchWise();
        this.super_admin_commission_type=this.globals.super_admin_commission_type;
    }

    trackByFn(index, item) {
        return index; // or item.id
    }

    getprofitLossMatchWise() {
        var sportdata = {
            'user_id': this.userId,
            'from_date': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'to_date': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            user_type_id: this.userDetails.user_type_id,
            sport_id: '0',
            match_id: '0',
            market_id: '0'
        };
        this.reportService.profitLossMatchWise(sportdata).subscribe(response => {
            this.loading = false;
            if (!response.error) {
                this.profitLoss = response.data;
            }
        }, error => {
            this.loading = false;
        });
    };

    getprofitLossMatch(match_id) {
        var sportdata = {
            'user_id': this.userId,
            'from_date': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'to_date': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            user_type_id: this.userDetails.user_type_id,
            sport_id: '0',
            match_id: match_id,
            market_id: '0'
        };
        this.reportService.profitLossMatchWise(sportdata).subscribe(response => {
            this.loading = false;
            if (!response.error) {
                this.profitLossMatchwise = response.data;
            }
        }, error => {
            this.loading = false;
        });
    }

    downloadCsv() {
        var sportdata = {
            'user_id': this.userId,
            'from_date': this.datePipe.transform(this.fromDateValue, 'yyyy-MM-dd'),
            'to_date': this.datePipe.transform(this.toDateValue, 'yyyy-MM-dd'),
            user_type_id: this.userDetails.user_type_id,
            sport_id: '0',
            match_id: '0',
            market_id: '0'
        };
        this.reportService.profitLossMatchWise(sportdata).subscribe(response => {
            if (!response.error) {
                let excelAccount = [];
                for (let i = 0; i < response.data.length; i++) {
                    var obj = {
                        'UID': (response.data[i].reffered_name),
                        'Stake': (response.data[i].stack),
                        'Player P/L	': (response.data[i].player_p_l),
                        'Commision': (response.data[i].super_comm),
                        'Upline P/L': (response.data[i].upline_p_l),
                        'Casino Comm.': (response.data[i].super_admin_commission),
                        'Pdc': (response.data[i].pdc_pl),
                    };

                    excelAccount.push(obj);
                }
                this.excelService.exportAsExcelFile(excelAccount, 'profitLoss');

            }
        }, error => {
            this.loading = false;
        });
    }


}
