import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipHistoryComponent } from './chip-history.component';

describe('ChipHistoryComponent', () => {
  let component: ChipHistoryComponent;
  let fixture: ComponentFixture<ChipHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
