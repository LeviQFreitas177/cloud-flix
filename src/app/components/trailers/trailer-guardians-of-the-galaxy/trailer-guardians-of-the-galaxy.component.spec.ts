import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerGuardiansOfTheGalaxyComponent } from './trailer-guardians-of-the-galaxy.component';

describe('TrailerGuardiansOfTheGalaxyComponent', () => {
  let component: TrailerGuardiansOfTheGalaxyComponent;
  let fixture: ComponentFixture<TrailerGuardiansOfTheGalaxyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerGuardiansOfTheGalaxyComponent]
    });
    fixture = TestBed.createComponent(TrailerGuardiansOfTheGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
