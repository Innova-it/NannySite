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

  // dont use it yet need to change all previous value
  updateSchool(key: string, school: School): Promise<void> {
    return this.schoolRef.update(key, school);

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
