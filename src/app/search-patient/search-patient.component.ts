import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';
import { Observable } from 'rxjs';
import Patient from '../models/Patient';
import { error } from 'protractor';


@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: []
})
export class SearchPatientComponent implements OnInit {

  patientId: string;
  patient: Patient;
  showPatientDiv: boolean = false;
  showErrorDiv: boolean = false;
  errorMessage: string;

  constructor(public route: ActivatedRoute, private svc: PatientServiceService) {

    this.patient = new Patient();
    let param_observable = route.paramMap;
    param_observable.subscribe((result) => {
      this.patientId = result.get('patientid')
    });

    this.svc.getPatientById(this.patientId).subscribe(response => {
      this.showPatientDiv = true;
      this.patient = response.body
    }, error => {
      this.showErrorDiv = true;
      this.errorMessage = "Patient with id " + this.patientId + " not found!!";
    });
  }


  ngOnInit() {
  }

}


