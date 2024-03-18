import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtGamesComponent } from './qt-games.component';

describe('QtGamesComponent', () => {
  let component: QtGamesComponent;
  let fixture: ComponentFixture<QtGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
