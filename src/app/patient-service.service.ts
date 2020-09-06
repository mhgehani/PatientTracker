import { Injectable } from '@angular/core';
import Patient from './models/Patient';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  patients: Patient[] = [];

  constructor(public http: HttpClient) { }

  getAllPatients(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>("http://localhost:3000/patients", { observe: 'response' });
  }

  deletePatient(pid: number): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>("http://localhost:3000/patients/" + pid, { observe: 'response' });
  }


  addPatient(patient: Patient): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>("http://localhost:3000/patients/", patient, { observe: 'response' });
  }

  getPatientById(patientId: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>("http://localhost:3000/patients/" + patientId, { observe: 'response' });
  }


}
