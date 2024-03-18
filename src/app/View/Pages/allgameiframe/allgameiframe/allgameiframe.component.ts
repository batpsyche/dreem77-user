import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlliframeService } from 'src/app/Service/alliframe/alliframe.service';
declare const TvbetFrame;
@Component({
  selector: 'app-allgameiframe',
  templateUrl: './allgameiframe.component.html',
  styleUrls: ['./allgameiframe.component.scss']
})
export class AllgameiframeComponent implements OnInit, OnDestroy {
  private lobbyURL: string;
  public url;
  public token:string;

  constructor(private sanatizer: DomSanitizer, private _service: AlliframeService) { }

  ngOnInit() {
    document.body.classList.add('iframe-tv-bet');

    this.getAllgameData();
  }

  getAllgameData() {
    const self = this;
     this.lobbyURL = 'https://aif.play247.in/authenticate?key=cGxheWVyXzFfNA&output=embed';
    // this.lobbyURL= "https://staging.supernowa.net/lobby?Token=D28D310D-57CC-4EDC-A639-3A7147F61A14"
    self.url = this.sanatizer.bypassSecurityTrustResourceUrl(this.lobbyURL);
   
    this._service.getallUserUrl().subscribe(
      (response) => {
        
      if(!response.error){
        if(response.data.error==0){
          this.lobbyURL = response.data.url + "&output=embed";;
          self.url = this.sanatizer.bypassSecurityTrustResourceUrl(this.lobbyURL);
          //window.open(self.url, "_blank");
        }
      }
      }, (error) => {
        console.error(error)
      }
    )
  }
  ngOnDestroy() {
    document.body.classList.remove('iframe-tv-bet');
  }

}
