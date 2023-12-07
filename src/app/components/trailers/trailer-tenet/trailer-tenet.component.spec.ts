import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerTenetComponent } from './trailer-tenet.component';

describe('TrailerTenetComponent', () => {
  let component: TrailerTenetComponent;
  let fixture: ComponentFixture<TrailerTenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerTenetComponent]
    });
    fixture = TestBed.createComponent(TrailerTenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
