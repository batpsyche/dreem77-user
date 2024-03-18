import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedGamesComponent } from './selected-games.component';

describe('SelectedGamesComponent', () => {
  let component: SelectedGamesComponent;
  let fixture: ComponentFixture<SelectedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
