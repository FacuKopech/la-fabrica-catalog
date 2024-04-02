import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsPopupComponent } from './work-details-popup.component';

describe('WorkDetailsPopupComponent', () => {
  let component: WorkDetailsPopupComponent;
  let fixture: ComponentFixture<WorkDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(WorkDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
