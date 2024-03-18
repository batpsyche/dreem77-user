import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-games',
  templateUrl: './selected-games.component.html',
  styleUrls: ['./selected-games.component.scss']
})
export class SelectedGamesComponent implements OnInit {
  SportId
  constructor(private ac: ActivatedRoute) { }

  ngOnInit() {
    this.ac.queryParams.subscribe(({SportId}) => {
      this.SportId = Number(SportId);
      console.log(SportId);
    });
  }

}
