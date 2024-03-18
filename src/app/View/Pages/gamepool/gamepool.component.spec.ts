import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GamepoolComponent } from './gamepool.component';


describe('GamepoolComponent', () => {
  let component: GamepoolComponent;
  let fixture: ComponentFixture<GamepoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamepoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamepoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
