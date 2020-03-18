import { Injectable } from '@angular/core';
import { School } from './model/School';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})

export class SchoolService {

private dbPath = '/School';

schoolRef: AngularFireList<School> = null;

constructor(private db: AngularFireDatabase) {
  this.schoolRef = db.list(this.dbPath);
}

createSchool(school: School): void {
this.schoolRef.push(school);
}

updateSchool(key: string, value: any): Promise<void> {
  return this.schoolRef.remove(key);

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
