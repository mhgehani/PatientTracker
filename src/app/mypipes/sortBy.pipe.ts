import { Pipe, PipeTransform } from '@angular/core';
import Patient from '../models/Patient';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(value: Patient[] = [], order: String): Patient[] {

    let patients: Patient[];

    if (order == 'asc') {
      patients = value.sort((a, b) => {

        if (a.age == b.age) {
          return 0;
        }
        else if (a.age > b.age) {
          return 1;
        }
        else {
          return -1;
        }

      });
    }
    else {
      patients = value.sort((a, b) => {
        if (a.age == b.age) {
          return 0;
        }
        else if (a.age < b.age) {
          return 1;
        }
        else {
          return -1;
        }

      });
    }

    return patients;

  }
}


