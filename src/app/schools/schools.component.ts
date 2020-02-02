import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { School } from '../model/School';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  school: Array<School>;
  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.school = this.dataService.school;
  }

  navigateRegister() {
    this.router.navigate (['register']);
  }

}
