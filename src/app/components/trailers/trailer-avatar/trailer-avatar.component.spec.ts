import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerAvatarComponent } from './trailer-avatar.component';

describe('TrailerAvatarComponent', () => {
  let component: TrailerAvatarComponent;
  let fixture: ComponentFixture<TrailerAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerAvatarComponent]
    });
    fixture = TestBed.createComponent(TrailerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
