import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintinanceComponent } from './under-maintinance.component';

describe('UnderMaintinanceComponent', () => {
  let component: UnderMaintinanceComponent;
  let fixture: ComponentFixture<UnderMaintinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderMaintinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderMaintinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
