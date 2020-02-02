import { Injectable } from '@angular/core';
import { School } from './model/School';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
dataSchool: School;

 school: Array<School>;

 
  constructor(private firestore: AngularFirestore) {
    this.school = Array<School>();
    const school1 = new School();
    school1.nameOfSchool = 'Nanny School1';
    school1.province = 'Gauteng';
    school1.email = 'testing@gmail.com';
    //Add first school
    this.school.push(school1) ;
    //add second school
    const school2 = new School();
    school2.nameOfSchool = 'Nanny School2';
    school2.province = 'Cape Town';
    school2.email = 'testNanny2@gmail.com';
    this.school.push(school2);

  }

  getEmployees() {
    return this.firestore.collection('School').snapshotChanges();
  }

  createPolicy(dataSchool: School){
    return this.firestore.collection('School').add(dataSchool);
}



}
