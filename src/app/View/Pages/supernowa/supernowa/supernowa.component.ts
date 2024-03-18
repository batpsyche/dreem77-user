import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SupernowaService } from 'src/app/Service/supernowa/supernowa.service';
declare const TvbetFrame;
@Component({
  selector: 'app-supernowa',
  templateUrl: './supernowa.component.html',
  styleUrls: ['./supernowa.component.scss']
})
export class SupernowaComponent implements OnInit, OnDestroy {
  private lobbyURL: string;
  public url;
  public token:string;

  constructor(private sanatizer: DomSanitizer, private _service: SupernowaService) { }

  ngOnInit() {
    document.body.classList.add('iframe-tv-bet');

    this.getSupernowaData();
  }

  getSupernowaData() {

   
    this._service.getSupernowaLoginToken().subscribe(
      (response) => {
        const self = this;

         this.lobbyURL = response.Data.lobbyURL;
        // this.lobbyURL= "https://staging.supernowa.net/lobby?Token=D28D310D-57CC-4EDC-A639-3A7147F61A14"
        self.url = this.sanatizer.bypassSecurityTrustResourceUrl(this.lobbyURL);
      }, (error) => {
        console.error(error)
      }
    )
  }
  ngOnDestroy() {
    document.body.classList.remove('iframe-tv-bet');
  }

}
