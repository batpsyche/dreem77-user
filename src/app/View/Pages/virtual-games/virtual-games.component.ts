import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-virtual-games',
  templateUrl: './virtual-games.component.html',
  styleUrls: ['./virtual-games.component.scss']
})
export class VirtualGamesComponent implements OnInit {

  url;
  private token = localStorage.getItem('TokenId').replace(/['"]+/g, '');
  private origin = document.location.origin;
  constructor(private sanatizer: DomSanitizer) {

    this.url = this.sanatizer.bypassSecurityTrustResourceUrl('https://play247.in/?auth=' + this.token + '&origin=' + this.origin);
  }

  ngOnInit() {
  }

}
