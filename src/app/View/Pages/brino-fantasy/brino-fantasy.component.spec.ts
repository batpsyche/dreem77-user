import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinoFantasyComponent } from './brino-fantasy.component';

describe('BrinoFantasyComponent', () => {
  let component: BrinoFantasyComponent;
  let fixture: ComponentFixture<BrinoFantasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrinoFantasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrinoFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
