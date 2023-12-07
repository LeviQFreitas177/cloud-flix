import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerSpiderManComponent } from './trailer-spider-man.component';

describe('TrailerSpiderManComponent', () => {
  let component: TrailerSpiderManComponent;
  let fixture: ComponentFixture<TrailerSpiderManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerSpiderManComponent]
    });
    fixture = TestBed.createComponent(TrailerSpiderManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
