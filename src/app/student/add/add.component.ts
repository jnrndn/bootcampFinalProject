import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentService } from "app/student/student.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student: Student;
  cont: number = 0;
  grades = [];

  constructor( 
    private studentService:StudentService,
    private location: Location
   ) { }

  ngOnInit() {
  }

  studentRecived(newStudent){
    this.cont = 0;
    this.grades = [
      newStudent.grade1, newStudent.grade2, newStudent.grade3,
      newStudent.grade4, newStudent.grade5, newStudent.grade6
    ];
    this.student = new Student();
    this.student.grades = this.grades;
    this.student.grades.map(element =>{
      if(element != 0){
        this.cont++;
      }
    })

    this.student.fullName = newStudent.fullname; 
    this.student.photo = newStudent.image;
    this.student.deliveredhmwkrs = this.cont;
    this.student.missingHmwrks = 6 - this.cont;
    this.student.lastUpdate = Date.now();

    this.studentService.create(this.student)
    .then(() => this.location.back() )
  }

}
