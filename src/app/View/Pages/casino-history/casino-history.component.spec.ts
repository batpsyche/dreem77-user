import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoHistoryComponent } from './casino-history.component';

describe('BrinoCasinoHistoryComponent', () => {
  let component: CasinoHistoryComponent;
  let fixture: ComponentFixture<CasinoHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasinoHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
