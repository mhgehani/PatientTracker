import { RouterModule } from '@angular/router';
import { PatientListComponentComponent } from './patient-list-component/patient-list-component.component'
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ErrorComponent } from './error/error.component';
import { CanActivateAddPatientService } from './can-activate-add-patient.service';
import { SearchPatientComponent } from './search-patient/search-patient.component';

const appRoutes = [
    { path: '', component: PatientListComponentComponent },
    { path: 'allpatients', component: PatientListComponentComponent },
    { path: 'addpatient', component: AddPatientComponent, canActivate:[CanActivateAddPatientService]},
    { path: 'patient/:patientid', component: SearchPatientComponent },
    { path: '**', component: ErrorComponent }
];

export default RouterModule.forRoot(appRoutes);