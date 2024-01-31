import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsMainPageComponent } from './trainings-main-page.component';

describe('TrainingsMainPageComponent', () => {
  let component: TrainingsMainPageComponent;
  let fixture: ComponentFixture<TrainingsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingsMainPageComponent]
    });
    fixture = TestBed.createComponent(TrainingsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
