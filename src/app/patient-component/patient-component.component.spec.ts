import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComponentComponent } from './patient-component.component';

describe('PatientComponentComponent', () => {
  let component: PatientComponentComponent;
  let fixture: ComponentFixture<PatientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
