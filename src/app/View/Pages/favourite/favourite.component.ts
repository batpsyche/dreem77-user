import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatchService} from '../../../Service/Match/match.service';
import {Match} from '../../../Model/match';
import {RightbarComponent} from '../../Partial/rightbar/rightbar.component';
import {resolve} from 'q';
import {Globals} from '../../../Model/global';

@Component({
    selector: 'app-favourite',
    templateUrl: './favourite.component.html',
    styleUrls: ['./favourite.component.scss'],
    providers: [RightbarComponent]
})
export class FavouriteComponent implements OnInit {
    callSport: any;
    matchList: any;
    calltype: any;
    arrayObj: any;

    constructor(private matchService: MatchService, private rightbar: RightbarComponent, private router: Router, public globals: Globals, private matchModel: Match) {
    }

    ngOnInit() {
        this.callSport = 1;
        this.getFavorite();
    }

    setUnfavourite(marketId) {
        this.rightbar.setUnfavourite(marketId);

    }

    getFavorite() {
        this.matchService.getAllFavouriteMarket().subscribe((data) => {
                if (data.data.result == 0 || data.data.marketid == '') {
                    alert('Match Closed.');
                    this.router.navigate(['dashboard/home']);
                }
                this.matchList = data.data;
                this.calltype = 2;

            }, (err) => {

            },
            () => {
                if (this.router.url.split('?')[0] == '/dashboard/Favourite') {
                    setTimeout(() => resolve(this.getFavorite()), 2000);
                }
            });
    }


    getOddValue(price, isback, name, id, marketid, index, marketitem) {

        this.arrayObj = {
            selection_id: id,
            market_id: marketitem.market_id,
            odds: price,
            stake: 0,
            is_back: isback,
            is_fancy: 0,
            MatchName: marketitem.name,
            placeName: name,
            isManual: 0,
            is_session_fancy: 'N'
        };
        this.matchModel.isbetslipshow = true;
        localStorage.setItem('betList', JSON.stringify(this.arrayObj));
        this.matchModel.setUser(this.arrayObj);
        this.rightbar.getBetSlipDataForOdds();
    }
}




