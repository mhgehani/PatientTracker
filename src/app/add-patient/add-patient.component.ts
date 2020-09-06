import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Patient from '../models/Patient';
import { PatientServiceService } from '../patient-service.service';
import { PatientListComponentComponent } from '../patient-list-component/patient-list-component.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: []
})
export class AddPatientComponent implements OnInit {

  patient: Patient;
  @Input() showComponent: boolean = true;

  constructor(public svc: PatientServiceService, public comp: PatientListComponentComponent) {
    this.patient = new Patient();
  }

  addPatient(): void {
    this.svc.addPatient(this.patient).subscribe(response => {
      this.comp.patients.push(response.body);
      this.patient = new Patient();
    });
  }

  calculateAge(): void {
    this.patient.age = new Date().getFullYear() - new Date(Date.parse(this.patient.DateOfBirth)).getFullYear()
  }

  ngOnInit() {
  }

}
