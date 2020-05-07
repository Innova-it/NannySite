import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  schools: any;

  constructor(public router: Router, private schoolService: SchoolService) { }

  ngOnInit() {
   this.getSchoolsList();
  }

  getSchoolsList() {
    this.schoolService.getSchoolList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(school => {
      this.schools = school;
    });
  }



  navigateRegister() {
    this.router.navigate (['register']);
  }

}
