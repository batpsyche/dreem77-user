import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AlliframeService } from 'src/app/Service/alliframe/alliframe.service';
import { MatchService } from 'src/app/Service/Match/match.service';
import { QTGamesService } from 'src/app/Service/QT-Games/qt-games.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  private userDetails;
  private qttoken: string;
  AllSports$: Observable<any>;
  @Input() SIDEBAR: SidebarComponent;
  constructor(private matchservice: MatchService, private router: Router, private qtservice: QTGamesService,private _ifrmaeService: AlliframeService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('UserLoginData'));
    this.AllSports$ = this.matchservice.GetSoprtName({ status: 1 }).pipe(share());

    this.getQTGameToken();
  }

  redirectToSelectedGame(displaydata) {
    this.SIDEBAR.getSeriesLst(displaydata);
  }

  redirectToSelected(sport_id) {
    this.router.navigate(['dashboard/game'], { queryParams: { SportId: sport_id } });
  }

  getQTGameToken() {
    this.qtservice.getGameToken().subscribe(
      (response: any) => {
        console.log(response);
        if (!response.error) {
          this.qttoken = response.data.access_token;
        }

      }, (err) => {
        console.error(err);
      }
    )
  }

  redirectToQTGameLobby() {
    this.qtservice.getGameLobbyUrl({
      user_name: this.userDetails.user_name,
      name: this.userDetails.name,
      device: "desktop",
      qt_token: this.qttoken
    }).subscribe(
      (response: any) => {
        console.log(response);
        if (!response.error) {
          window.open(response.data.url, "_blank");
        }
      }, (err) => {
        console.error(err);
      }
    )
  }
  openEzugiLobby() {
    const token = this.userDetails.token.replace(/['"]+/g, '');
    const lobbyURL = `https://playint.tableslive.com/auth/?token=${token}&operatorId=10511001`
    window.open(lobbyURL, "_blank");
  }
  getAllgameData() {
    const self = this;
    this._ifrmaeService.getallUserUrl().subscribe(
      (response) => {
        
      if(!response.error){
        if(response.data.error==0){
         let lobbyURL = response.data.url;
          // let url = this.sanatizer.bypassSecurityTrustResourceUrl(lobbyURL);
          window.open(lobbyURL, "_blank");
        }
      }
      }, (error) => {
        console.error(error)
      }
    )
  }


}
