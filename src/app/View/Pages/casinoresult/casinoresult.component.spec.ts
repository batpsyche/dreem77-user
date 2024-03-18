import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoresultComponent } from './casinoresult.component';

describe('CasinoresultComponent', () => {
  let component: CasinoresultComponent;
  let fixture: ComponentFixture<CasinoresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasinoresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
