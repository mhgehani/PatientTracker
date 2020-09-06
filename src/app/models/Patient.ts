export default class Patient {

    id: number;
    PatientName: string;
    DateOfBirth: string;
    age: number;


    constructor(PatientId?: number, PatientName?: string, DateOfBirth?: string, age?: number) {
        this.age = age;
        this.DateOfBirth = DateOfBirth;
        this.id = PatientId;
        this.PatientName = PatientName;
    }
}