import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernowaComponent } from './supernowa.component';

describe('SupernowaComponent', () => {
  let component: SupernowaComponent;
  let fixture: ComponentFixture<SupernowaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupernowaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupernowaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
