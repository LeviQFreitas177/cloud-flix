import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerAvengersComponent } from './trailer-avengers.component';

describe('TrailerAvengersComponent', () => {
  let component: TrailerAvengersComponent;
  let fixture: ComponentFixture<TrailerAvengersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerAvengersComponent]
    });
    fixture = TestBed.createComponent(TrailerAvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
