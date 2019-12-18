import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentReportComponent } from './appartment-report.component';

describe('AppartmentReportComponent', () => {
  let component: AppartmentReportComponent;
  let fixture: ComponentFixture<AppartmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
