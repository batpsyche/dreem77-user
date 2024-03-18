import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMatchOddsComponent } from './user-match-odds.component';

describe('UserMatchOddsComponent', () => {
  let component: UserMatchOddsComponent;
  let fixture: ComponentFixture<UserMatchOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMatchOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMatchOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
