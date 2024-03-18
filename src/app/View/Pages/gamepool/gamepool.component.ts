import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/Service/Match/match.service';
import { SSPTokenService } from 'src/app/Service/SSP/ssp.token.service';
import { environment as env } from 'src/environments/environment';
import { GAMES_LIST } from '../../../GAME-LISTS/ssp-games-list';
@Component({
  selector: 'app-gamepool',
  templateUrl: './gamepool.component.html',
  styleUrls: ['./gamepool.component.scss']
})
export class GamepoolComponent implements OnInit {
  private userDetails;
  public gameList = [];
  public gameURL : any;
  private token: string;
  constructor(private sspService: SSPTokenService,private match: MatchService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    // this.fetchSSPToken(this.userDetails);
    this.getgames();
  }

  getgames(){
    debugger
   this.match.getGamesPool().subscribe((res)=>{
     this.gameList = res.games
     console.log(this.gameList)
   })

  }
  goToGame(id) {
    var user= {
      "game_id" : id
    }
    this.match.gotoGameURL(user).subscribe(res=>{
      this.gameURL = res.url;
       window.open(this.gameURL, "_blank");

      // console.log("hiiii",res)
    })
    // const directGameLaunchURL = env.SSPBASE_PATH + 'signin/viewer/walletGameLogin.jsp?token=' + this.token + '&lobby=false&lang=en&gameType=' + selectedGame.gametypeid + '&tableid=' + selectedGame.tableid + '&betType=1';
    // window.open(directGameLaunchURL, "_blank");
  }
  // fetchSSPToken({ user_name, name }) {
  //   this.sspService.getGameToken({ user_name, name }).subscribe((res: any) => {
  //     if (!res.error) {
  //       this.token = res.data.response.token;
  //       // lobby url
  //       // const gameLobbyURL = env.SSPBASE_PATH + 'signin/viewer/walletGameLogin.jsp?token=' + res.data.response.token + '&lang=en&lobby=true';
  //     }
  //   });
  // }
  // goToMultiTable() {
  //   const multiTableGameURL = `${env.SSPBASE_PATH}signin/viewer/walletGameLogin.jsp?token=${this.token}&lobby=false&lang=en&multitable=true`;
  //   window.open(multiTableGameURL, "_blank");
  // }

}
