import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvBetGamesComponent } from './tv-bet-games.component';

describe('TvBetGamesComponent', () => {
  let component: TvBetGamesComponent;
  let fixture: ComponentFixture<TvBetGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvBetGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvBetGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
