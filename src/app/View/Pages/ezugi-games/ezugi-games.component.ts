import { Component, OnInit } from '@angular/core';
import { EZUGI_GAMES } from 'src/app/GAME-LISTS/ezugi.games';
import { MegaWinGameService } from 'src/app/Service/MegaWin/mega-win.service';

@Component({
  selector: 'app-ezugi-games',
  templateUrl: './ezugi-games.component.html',
  styleUrls: ['./ezugi-games.component.scss']
})
export class EzugiGamesComponent implements OnInit {
  private userDetails;
  EzugiGames = EZUGI_GAMES;
  constructor(private megaWinService: MegaWinGameService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
  }

  getLaunchURLForGame({ game_id = '000', device_type = 'd' }) {
    const { user_name, name } = this.userDetails;
    this.megaWinService.getGameLaunchURL({ game_id, device_type, user_name, name }).subscribe(
      (response: any) => {
        if (response.code) {
          return;
        }

        if (response.data.code != '200') {
          return;
        }

        const directGameLaunchURL = response.data.launch_request_url;
        console.log(directGameLaunchURL);
        window.open(directGameLaunchURL, "_blank");
      }, (err) => {
        console.error(err);
      }
    );
  }

}
