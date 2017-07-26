import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student: Student;

  constructor() { }

  ngOnInit() {
  }

  studentrecibed(student){
    this.student = student
    console.log(this.student);
    
  }

}
