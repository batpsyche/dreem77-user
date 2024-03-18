import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TVBetService } from 'src/app/Service/TVBet/tvbet.service';
declare const TvbetFrame;
@Component({
  selector: 'app-tv-bet-games',
  templateUrl: './tv-bet-games.component.html',
  styleUrls: ['./tv-bet-games.component.scss']
})
export class TvBetGamesComponent implements OnInit,OnDestroy {
  private token: string;
  public url;

  constructor(private sanatizer: DomSanitizer, private tvBetService: TVBetService) { }

  ngOnInit() {
    document.body.classList.add('iframe-tv-bet');
    this.getTVBetAuthToken();
  }

  getTVBetAuthToken() {
    this.tvBetService.getTVBetToken().subscribe(
      (response) => {
        this.token = response.token;
        const that = this;
        (function () {
          new TvbetFrame({
            'lng': 'en',
            'clientId': '3561',
            'tokenAuth': `${that.token}`,
            'server': 'https://tvbetframe13.com',
            'floatTop': '#fTop',
            'containerId': 'tvbet-game',
          });
        })();
        this.url = this.sanatizer.bypassSecurityTrustResourceUrl('https://tvbetframe13.com?tokenAuth=' + this.token + '&clientId=' + '3561');
      }, (error) => {
        console.error(error)
      }
    )
  }
  ngOnDestroy() {
    document.body.classList.remove('iframe-tv-bet');
  }

}
