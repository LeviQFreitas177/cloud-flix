import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerAvengersEndgameComponent } from './trailer-avengers-endgame.component';

describe('TrailerAvengersEndgameComponent', () => {
  let component: TrailerAvengersEndgameComponent;
  let fixture: ComponentFixture<TrailerAvengersEndgameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerAvengersEndgameComponent]
    });
    fixture = TestBed.createComponent(TrailerAvengersEndgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
