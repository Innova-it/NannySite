import { Injectable } from '@angular/core';
import { School } from './model/School';
import { AngularFireDatabase, AngularFireList ,AngularFireObject} from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})

export class SchoolService {

  private dbPath = '/School';

  schoolRef: AngularFireList<School> = null;

  schoolRefs: AngularFireObject<School> = null;



  constructor(private db: AngularFireDatabase) {
    this.schoolRef = db.list(this.dbPath);
  }

  createSchool(school: School): void {
    this.schoolRef.push(school);
  }


  updateSchool(key: string, school: School): Promise<void> {
    return this.schoolRef.update(key,{
      nameOfSchool : school.nameOfSchool ,
      province : school.province,
      email : school.email,
      phoneNumber : school.phoneNumber
    });

  }

  deleteSchool(key: string): Promise<void> {
    return this.schoolRef.remove(key);
  }

  getSchoolList(): AngularFireList<School> {
    return this.schoolRef;
  }

  deleteAll(): Promise<void> {
    return this.schoolRef.remove();
  }



}
