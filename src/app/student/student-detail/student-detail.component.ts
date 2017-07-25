import { StudentService } from './../student.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from './../student';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: Student;

  constructor(
     private router:ActivatedRoute,
     private location: Location,
     private studentService:StudentService
   ) { }

  ngOnInit() {
    this.router.paramMap
      .switchMap((params: ParamMap)=> this.studentService.getstudent(+params.get('id')))
      .subscribe(student => this.student = student)
  }

  goBack(){
    this.location.back();
  }
}
