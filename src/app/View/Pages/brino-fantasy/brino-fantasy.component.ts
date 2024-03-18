import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-brino-fantasy',
  templateUrl: './brino-fantasy.component.html',
  styleUrls: ['./brino-fantasy.component.scss']
})
export class BrinoFantasyComponent implements OnInit {
  url;
  private token = localStorage.getItem('TokenId').replace(/['"]+/g, '');
  private origin = document.location.origin;
  constructor(private sanatizer: DomSanitizer) {
    this.url = this.sanatizer.bypassSecurityTrustResourceUrl('https://fantasy.play247.in/#/matches?token=' + this.token + '&origin=' + this.origin);
  }

  ngOnInit() {
  }

}
