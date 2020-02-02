import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore} from '@angular/fire/firestore';
import { School } from './../model/School';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  school = new School();


  schoolForm = new FormGroup({
    id :new FormControl(''),
    nameOFschool : new FormControl(''),
    province : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl('')
  });


  constructor(public router: Router, private firestore: AngularFirestore) { }

  ngOnInit() {

  }

  onsubmit(){
  this.school.id = this.schoolForm.get('id').value;
  this.school.nameOfSchool = this.schoolForm.get('nameOFschool').value;
  this.school.province = this.schoolForm.get('province').value;
  this.school.email = this.schoolForm.get('email').value;
  this.school.phoneNumber = this.schoolForm.get('phoneNumber').value;
  let data = this.schoolForm.value;
  console.log(this.school);
  this.databaseSent(data);

  }

    databaseSent(school){
     this.firestore.collection('School').add(school);
     console.log(school);
     this.schoolForm.reset();

    }

  }

