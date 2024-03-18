import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaWinComponent } from './mega-win.component';

describe('MegaWinComponent', () => {
  let component: MegaWinComponent;
  let fixture: ComponentFixture<MegaWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
