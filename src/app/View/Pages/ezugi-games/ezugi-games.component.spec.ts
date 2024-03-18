import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzugiGamesComponent } from './ezugi-games.component';

describe('EzugiGamesComponent', () => {
  let component: EzugiGamesComponent;
  let fixture: ComponentFixture<EzugiGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzugiGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzugiGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
