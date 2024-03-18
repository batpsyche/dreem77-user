import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsMarketComponent } from './bets-market.component';

describe('BetsMarketComponent', () => {
  let component: BetsMarketComponent;
  let fixture: ComponentFixture<BetsMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetsMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
