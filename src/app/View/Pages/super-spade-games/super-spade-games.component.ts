import { Component, OnInit } from '@angular/core';
import { SSPTokenService } from 'src/app/Service/SSP/ssp.token.service';
import { environment as env } from 'src/environments/environment';
import { GAMES_LIST } from '../../../GAME-LISTS/ssp-games-list';
@Component({
  selector: 'app-super-spade-games',
  templateUrl: './super-spade-games.component.html',
  styleUrls: ['./super-spade-games.component.scss']
})
export class SuperSpadeGamesComponent implements OnInit {
  readonly SSP_GAMES = GAMES_LIST;
  private userDetails;
  private token: string;
  constructor(private sspService: SSPTokenService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    this.fetchSSPToken(this.userDetails);
  }

  goToSuperSpade(selectedGame) {
    const directGameLaunchURL = env.SSPBASE_PATH + 'signin/viewer/walletGameLogin.jsp?token=' + this.token + '&lobby=false&lang=en&gameType=' + selectedGame.gametypeid + '&tableid=' + selectedGame.tableid + '&betType=1';
    window.open(directGameLaunchURL, "_blank");
  }
  fetchSSPToken({ user_name, name }) {
    this.sspService.getGameToken({ user_name, name }).subscribe((res: any) => {
      if (!res.error) {
        this.token = res.data.response.token;
        // lobby url
        // const gameLobbyURL = env.SSPBASE_PATH + 'signin/viewer/walletGameLogin.jsp?token=' + res.data.response.token + '&lang=en&lobby=true';
      }
    });
  }
  goToMultiTable() {
    const multiTableGameURL = `${env.SSPBASE_PATH}signin/viewer/walletGameLogin.jsp?token=${this.token}&lobby=false&lang=en&multitable=true`;
    window.open(multiTableGameURL, "_blank");
  }

}
