import { TestBed, inject } from '@angular/core/testing';

import { CanActivateAddPatientService } from './can-activate-add-patient.service';

describe('CanActivateAddPatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAddPatientService]
    });
  });

  it('should be created', inject([CanActivateAddPatientService], (service: CanActivateAddPatientService) => {
    expect(service).toBeTruthy();
  }));
});
