import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl, FormGroup } from '@angular/forms';
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



  schoolForm = new FormGroup({
    id :new FormControl(''),
    nameOFschool : new FormControl(''),
    province : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl('')
  });



  constructor(public router: Router, private schoolSerivce: SchoolService) { }

  ngOnInit() {

  }

  onsubmit(){
    this.school.id = this.schoolForm.get('id').value;
    this.school.nameOfSchool = this.schoolForm.get('nameOFschool').value;
    this.school.province = this.schoolForm.get('province').value;
    this.school.email = this.schoolForm.get('email').value;
    this.school.phoneNumber = this.schoolForm.get('phoneNumber').value;
    //let data = this.schoolForm.value;
    console.log(this.school);
    this.save(this.school);
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
      this.schoolSerivce.createSchool(this.school);
      this.school = new School();
    }



  }

