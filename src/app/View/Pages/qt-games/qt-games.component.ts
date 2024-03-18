import { Component, OnInit } from '@angular/core';
import { QTGamesService } from 'src/app/Service/QT-Games/qt-games.service';

@Component({
  selector: 'app-qt-games',
  templateUrl: './qt-games.component.html',
  styleUrls: ['./qt-games.component.scss']
})
export class QtGamesComponent implements OnInit {

  constructor(private qtgamesService: QTGamesService) { }

  ngOnInit() {
    this.getGameToken();
  }

  getGameToken() {
    this.qtgamesService.getGameToken().subscribe(
      (response) => {
        console.log(response);
      }, (err) => {
        console.error(err);
      }
    );
  }

}
