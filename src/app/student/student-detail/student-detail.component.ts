import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';
import { StudentService } from './../student.service';
import { Student } from './../student';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: Student;
  edit:boolean = false;
  cont:number = 0;
 

  constructor(
     private activedRoute:ActivatedRoute,
     private router: Router,
     private location: Location,
     private studentService:StudentService,
     public snakBar: MdSnackBar
   ) { }

  ngOnInit() {
    this.activedRoute.paramMap
      .switchMap((params: ParamMap)=> this.studentService.getstudent(+params.get('id')))
      .subscribe(student => this.student = student)
  }

  goBack(){
    this.location.back();
  }

  toEdit(){
    this.edit = !this.edit;
  }

  toDelete(student: Student){
    this.studentService.delete(student.id)
      .then(() => this.router.navigate(['/']))
  }

  save(){
    this.cont = 0;
    this.student.lastUpdate = Date.now();
    this.student.grades.map(element =>{
      if(element.assignment !== 0){
        this.cont++;
      }
    })
    this.student.deliveredhmwkrs = this.cont;
    this.student.missingHmwrks = 6 - this.cont; 
    
    this.studentService.update(this.student)
    .then(() => this.cancel())
  }

  cancel(){
    this.edit = !this.edit;
  }

  openSnackbar(student: Student){
    this.snakBar.open(`Are you sure to delete ${student.fullName}?`, 'Delete',{ duration:5000 })
    .onAction()
    .toPromise()
    .then(() => this.toDelete(student))
  }
}
