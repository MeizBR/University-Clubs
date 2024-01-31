import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsMainPageComponent } from './workshops-main-page.component';

describe('WorkshopsMainPageComponent', () => {
  let component: WorkshopsMainPageComponent;
  let fixture: ComponentFixture<WorkshopsMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopsMainPageComponent]
    });
    fixture = TestBed.createComponent(WorkshopsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
