import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/model/School';
import { SchoolService } from './../../school.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  @Input()
  school: School;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
  }

//need to fix the update method to change certain data
  updateActive(isActive: boolean) {
    this.schoolService
      .updateSchool(this.school.nameOfSchool, this.school)
      .catch(err => console.log(err));
  }

  deleteSchool() {
    this.schoolService
      .deleteSchool(this.school.$Key)
      .catch(err => console.log(err));
  }

}
