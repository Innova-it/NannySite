import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { School } from './../model/School';
import { SchoolService } from './../school.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  school: School = new School();
  submitted = false;



  schoolForm: FormGroup;



  constructor(public router: Router, private schoolBuilderForm: FormBuilder, private schoolSerivce: SchoolService) {
    this.createForm();
  }
  createForm() {
    this.schoolForm = this.schoolBuilderForm.group({
      $key: null,
      nameOFschool: ['', Validators.required],
      province: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.maxLength]

    });
  }

  ngOnInit() {

  }

  onsubmit() {
    this.school.nameOfSchool = this.schoolForm.get('nameOFschool').value;
    this.school.province = this.schoolForm.get('province').value;
    this.school.email = this.schoolForm.get('email').value;
    this.school.phoneNumber = this.schoolForm.get('phoneNumber').value;
    //let data = this.schoolForm.value;
    console.log(this.school);
    this.save(this.school);
    this.schoolForm.reset();
    alert('You have successfully submitted school we will communicate to you as soon as possible');
  }

  /*databaseSent(school){
       this.firestore.collection('School').add(school);
       console.log(school);
       this.schoolForm.reset();

      }*/

  newCustomer(): void {
    this.submitted = false;
    this.school = new School();
  }

  save(school) {
    this.schoolSerivce.createSchool(school);
    this.school = new School();
  }



}
