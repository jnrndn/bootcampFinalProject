import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from "./../../student/student";
import { Location } from '@angular/common';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Input() student:Student;
  @Output() submitButton: EventEmitter<any> = new EventEmitter;

  grade1:number;
  grade2:number;
  grade3:number;
  grade4:number;
  grade5:number;
  grade6:number;
  name:string = ""; 
  image:string = "";

  studentToEmit:Student;
  
  grades: number[] = [];

  constructor( 
    private location: Location,
    private router: Router
   ) { }

  ngOnInit() {
    if(this.student) { this.grades = this.student.grades}
  }

  onSubmit(formulary: NgForm){
    let cont = 0;
    this.grades=[
      formulary.value.grade1, formulary.value.grade2, formulary.value.grade3,
      formulary.value.grade4, formulary.value.grade5, formulary.value.grade6  
    ];

    this.grades.forEach(grade =>{ if(grade != 0){ cont++}})
    console.log(formulary.value.grade1);
    console.log(this.grades, cont);
    


    this.studentToEmit.fullName = formulary.value.fullname
    this.studentToEmit.photo = formulary.value.image
    this.studentToEmit.grades = this.grades;
    this.studentToEmit.deliveredhmwkrs = cont;
    this.studentToEmit.missingHmwrks = 6 - cont
    this.studentToEmit.lastUpdate = Date.now();

    // console.log(this.studentToEmit);
    
    
    // this.submitButton.emit(this.studentToEmit)
    
  }

  update(){

  }

  cancel(){
    this.location.back()
  }
}
