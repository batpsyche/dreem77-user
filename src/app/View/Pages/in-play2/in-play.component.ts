import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { InPlay } from 'src/app/Model/in-play';
import { Match } from 'src/app/Model/match';
import { InplayService } from 'src/app/Service/InPlay/inplay.service';

@Component({
  selector: 'app-in-play',
  templateUrl: './in-play.component.html',
  styleUrls: ['./in-play.component.scss']
})
export class InPlayComponent implements OnInit {
  InPlay$: Observable<InPlay>
  constructor(public matchModel: Match, private inplayService: InplayService, private router: Router) { }

  ngOnInit() {
    this.InPlay$ = this.inplayService.getInplayMatches().pipe(share());
  }
  gotoUserMatchOddsPage(match) {
    localStorage.setItem('selectedMatch', JSON.stringify(match));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: match.match_id } });
  }
  gotoTeenPattiLive() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -151, "matchUserId ": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -151 } });
  }

  gotoUpLive() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -156, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -156 } });
  }
  gotoAndarLive() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -157, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -157 } });
  }

  gotoCasinoLive() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -158, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -158 } });
  }

  gotoTeenPattiVirtual() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -1002, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -1002 } });
  }

  gotoUpVirtal() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -1005, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -1005 } });
  }

  gotoTeenPattiTwintyVirtual() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -1003, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -1003 } });
  }

  goToAndarBhar() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -7, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -7 } });
  }
  goToTeenPatti2020() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -1, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -1 } });
  }
  goToOneDayTeenPatti() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -2, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -2 } });
  }
  goToTestTeenPatti() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -3, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -3 } });
  }
  goToLucky7() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -145, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -145 } });
  }
  goTo2020Poker() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -4, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -4 } });
  }
  goToOneDayPoker() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -5, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -5 } });
  }
  goToCasinoGame(id) {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": id, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: id } });
  }

  gotoCasinoVirtal() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -1001, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -1001 } });

  }
  gotoAndarVirtal() {
    localStorage.setItem('selectedMatch', JSON.stringify({ "match_id": -1004, "user_id": 4314 }));
    this.router.navigate(['dashboard/UserMatchOdds'], { queryParams: { refresh: -1004 } });
  }

}
