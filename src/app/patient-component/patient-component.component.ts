import { Component, OnInit, Input } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import Patient from '../models/Patient';

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: []
})
export class PatientComponentComponent implements OnInit {

  @Input()
  patient: Patient;

  constructor(public svc: PatientServiceService) {
  }

  ngOnInit() {
  }

}
