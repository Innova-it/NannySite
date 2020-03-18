import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school.service';
import { School } from '../model/School';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  schoolsView: any;

  constructor(public router: Router, private schoolService: SchoolService) { }

  ngOnInit() {
   this.getSchoolList();
  }

  getSchoolList() {
    this.schoolService.getSchoolList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val()})
        )
    )
    ).subscribe(schools => {
      this.schoolsView = this.schoolsView;
    });
  }


  navigateRegister() {
    this.router.navigate (['register']);
  }

}
