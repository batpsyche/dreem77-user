import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualGamesComponent } from './virtual-games.component';

describe('VirtualGamesComponent', () => {
  let component: VirtualGamesComponent;
  let fixture: ComponentFixture<VirtualGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
