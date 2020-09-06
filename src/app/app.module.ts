import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientListComponentComponent } from './patient-list-component/patient-list-component.component';
import { PatientComponentComponent } from './patient-component/patient-component.component';
import { SortPipe } from './mypipes/sortBy.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './add-patient/add-patient.component';
import appRoutes from './app.routes';
import { ErrorComponent } from './error/error.component'
import { FormsModule } from '@angular/forms';
import { SearchPatientComponent } from './search-patient/search-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponentComponent,
    PatientComponentComponent,
    SortPipe,
    AddPatientComponent,
    ErrorComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, appRoutes, FormsModule
  ],
  providers: [PatientListComponentComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
