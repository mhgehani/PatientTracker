import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import Patient from '../models/Patient'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list-component',
  templateUrl: './patient-list-component.component.html',
  styleUrls: []
})
export class PatientListComponentComponent implements OnInit {


  selectedIDs: any[] = [];
  patients: Patient[] = [];
  order: String;
  showVar: boolean;
  timer: any;
  errorMessage: string = "";
  countDown: number = 30;
  countDownTimer: any;
  deletedFlag: boolean = false;
  deleteUnsuccessfull: boolean = false;
  showEmptyListDivFlag: boolean = false;

  @ViewChild('closeBtn') myDiv: ElementRef;

  showAddPatientComponent() {
    this.showVar = !this.showVar;
  }

  constructor(public svc: PatientServiceService) {
    this.getAllPatients();
    this.showEmptyListDiv();
  }

  deletePatient(pid: number): void {
    let ob: Observable<any> = this.svc.deletePatient(pid);
    ob.subscribe(success => {
      this.getAllPatients();
      this.deletedFlag = true;
      this.showSuccessDiv();
    },
      error => {
        this.deleteUnsuccessfull = true;
      });
    this.emptySelectedIdList();
    clearTimeout(this.timer);
  }

  deleteMultiplePatients(): void {

    if (this.selectedIDs.length == 0) {
      this.errorMessage = "Please select atleast one patient record to delete"
    }
    else {

      this.selectedIDs.forEach(patient => {
        let index = this.patients.indexOf(patient);
        if (index > -1) {
          this.patients.splice(index, 1);
        }
      });

      this.countDownTimer = setInterval(() => {
        this.countDown = this.countDown - 1
      }, 1000);

      this.timer = setTimeout(() => {
        this.selectedIDs.forEach(p => {
          this.deletePatient(p.id);
        });

        this.emptySelectedIdList();
        this.triggerFalseClick();
        this.deletedFlag = true;
        this.showSuccessDiv();
      }, 30000);
    }
  }

  emptySelectedIdList(): void {
    this.selectedIDs.length = 0;
  }

  onCheckboxChange(e, patient: Patient) {

    this.errorMessage = "";
    this.clearCountDownTimer();
    clearTimeout(this.timer);

    if (e.target.checked) {
      this.selectedIDs.push(patient);
    }
    else {
      let index = this.selectedIDs.indexOf(patient);
      if (index > -1) {
        this.selectedIDs.splice(index, 1);
      }
    }
  }


  getAllPatients(): void {
    this.svc.getAllPatients().subscribe(response => {
      this.patients = response.body;
    });
  }

  getDeletedRecordsBack(): void {

    this.clearCountDownTimer();
    clearTimeout(this.timer);
    this.selectedIDs.forEach(patient => {
      this.patients.push(patient);
    });
    this.emptySelectedIdList();
  }

  ngOnInit() {

  }

  clearCountDownTimer(): void {
    clearInterval(this.countDownTimer);
    this.countDown = 30;
  }

  triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
    el.click();
  }

  showSuccessDiv(): void {

    if (this.deletedFlag) {
      setInterval(() => {
        this.deletedFlag = false;
      }, 2000);
    }
  }

  showEmptyListDiv(): void {
    if (this.patients.length == 0) {

      this.showEmptyListDivFlag = true;
    }

  }


}
