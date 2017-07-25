import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MdSlideToggleModule, MdSortModule, MdButtonModule, MdCardModule, MdTableModule, MdInputModule } from '@angular/material';
import  {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { StudentService } from './student.service';


import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSlideToggleModule,
    MdSortModule,
    MdButtonModule,
    MdCardModule,
    MdTableModule,
    MdInputModule,
    
  ],
  declarations: [
    StudentComponent,
    StudentDetailComponent
  ],
  providers:[StudentService],
  exports:[StudentComponent]
})
export class StudentModule { }
