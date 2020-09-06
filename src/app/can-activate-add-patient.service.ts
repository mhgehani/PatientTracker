import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAddPatientService implements CanActivate {


  constructor(private router: Router) { }
  public canActivate(): boolean {

    if (confirm('Do you want to proceed for adding a new patient?')) {
      return true;
    }
    else {
      this.router.navigate(['./']);
      return false;
    }
  }


}
