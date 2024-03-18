import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossMatchComponent } from './profit-loss-match.component';

describe('ProfitLossMatchComponent', () => {
  let component: ProfitLossMatchComponent;
  let fixture: ComponentFixture<ProfitLossMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitLossMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitLossMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
