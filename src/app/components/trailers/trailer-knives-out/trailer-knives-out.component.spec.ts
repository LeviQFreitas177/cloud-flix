import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerKnivesOutComponent } from './trailer-knives-out.component';

describe('TrailerKnivesOutComponent', () => {
  let component: TrailerKnivesOutComponent;
  let fixture: ComponentFixture<TrailerKnivesOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerKnivesOutComponent]
    });
    fixture = TestBed.createComponent(TrailerKnivesOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
