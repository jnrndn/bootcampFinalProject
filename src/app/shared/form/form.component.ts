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
  @Output() submitButton: EventEmitter<any> = new EventEmitter();
  @Output() updateButton: EventEmitter<any> = new EventEmitter();

  grades: number[] = [];

  constructor( 
    private location: Location,
    private router: Router
  ) {  }

  ngOnInit() {
    if(this.student) { this.grades = this.student.grades}
  }

  save(form: any){
    this.submitButton.emit(form);
  }

  update(form: any){
    this.updateButton.emit(form);
  }

  cancel(){
    this.location.back()
  }
}
