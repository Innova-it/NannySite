import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/model/School';
import { SchoolService } from './../../school.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {




  constructor(public router: Router, private schoolService: SchoolService) { }

  @Input()
  school: School;


  ngOnInit() {
  }

// need to fix the update method to change certain data
  updateActive(key: string, event: any) {
     // this.school.$Key = key;
      this.school.nameOfSchool = event.target.nameOfSchool.value ;
      this.school.province = event.target.province.value;
      this.school.email = event.target.email.value;
      this.school.phoneNumber = event.target.phoneNumber.value;

      console.log(this.school);

      this.schoolService
      .updateSchool(key, this.school)
      .catch(err => console.log(err));
  }

  schoolEdit(){
    this.router.navigateByUrl('schools/school-edits');
  }

  deleteSchool() {
    this.schoolService
      .deleteSchool(this.school.$Key)
      .catch(err => console.log(err));
  }


}
