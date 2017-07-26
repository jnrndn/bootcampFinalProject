import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Sort } from "@angular/material";

import { StudentService } from "./student.service";

import { Student } from "./student";

import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/filter'
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  color:string = 'accent';
  checked:boolean = false;
  disabled:boolean = false;
  avgGrade:number = 0;
  students = [];
  temp: Student[] = [];
  copy: Student[] = this.students;
  selectedStudent: Student;
  table;

  
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentService.getStudents()
      .map(student => {
      student.json().data.map((s) => {
        this.avgGrade = 0;
        s.grades.forEach(grade => {
          this.avgGrade += grade
        })        
        this.avgGrade /= 6;
        this.students.push({
          'id':s.id,
          'fullName': s.fullName,
          'photo':s.photo,
          'averagegrade': this.avgGrade,
          'deliveredhmwkrs': s.deliveredhmwkrs,
          'missingHmwrks': s.missingHmwrks,
          'lastUpdate': s.lastUpdate
        }) 
      })
    })
    .subscribe()
  }

  sortData(sort: Sort) {
    const data = this.students.slice();
    if (!sort.active || sort.direction == '') {
      this.students = data;
      return;
    }

    this.students = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.fullName, b.fullName, isAsc); 
        case 'avgGrade': return compare(+a.averagegrade, +b.averagegrade, isAsc);
        case 'lastUpdate': return compare(+a.lastUpdate, +b.lastUpdate, isAsc);
        default: return 0;
      }
    });
  }

  selectStudent(student:Student):void{
    this.selectedStudent = student;
    
  }

  toggle():void{
    this.checked = !this.checked
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.temp = this.students;

    if(val){
      const temp = this.temp.filter(function(d) {
        return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
      });
      this.students = temp;
    } else {
      this.students = this.copy;
    }
  }

  goToDetail():void{    
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }

  addStudent(){
    this.router.navigate(['/add'])
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}