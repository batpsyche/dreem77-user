import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSpadeGamesComponent } from './super-spade-games.component';

describe('SuperSpadeGamesComponent', () => {
  let component: SuperSpadeGamesComponent;
  let fixture: ComponentFixture<SuperSpadeGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSpadeGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSpadeGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
