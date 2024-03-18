import { Component, OnInit } from '@angular/core';

import {
  TABLE_GAMES, ROULETTE, BLACKJACK, SLOTGAMES,
  CLASSICSLOT, LIVE_GAMES, MULTIHAND_POKER, PYRAMID_POKER,
  VIDEO_POKER
} from 'src/app/GAME-LISTS/mega-win-games';

import { MegaWinGameService } from 'src/app/Service/MegaWin/mega-win.service';


@Component({
  selector: 'app-mega-win',
  templateUrl: './mega-win.component.html',
  styleUrls: ['./mega-win.component.scss']
})
export class MegaWinComponent implements OnInit {
  private userDetails;
  tableGames = TABLE_GAMES;
  roulette = ROULETTE;
  blackJack = BLACKJACK;
  slotGames = SLOTGAMES;
  classicSlot = CLASSICSLOT;
  liveGames = LIVE_GAMES;
  multihandPoker = MULTIHAND_POKER;
  pyramidPoker = PYRAMID_POKER;
  videoPoker = VIDEO_POKER;
  selectedTab = 1;
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
