import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaGamesComponent } from './sa-games.component';

describe('SaGamesComponent', () => {
  let component: SaGamesComponent;
  let fixture: ComponentFixture<SaGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
