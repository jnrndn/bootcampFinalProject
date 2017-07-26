import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { SharedModule } from "./../shared/shared.module";

import { MdSlideToggleModule, MdSortModule, MdButtonModule, MdCardModule,
         MdTableModule, MdInputModule, MdSnackBarModule } from '@angular/material';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentService } from './student.service';


import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AddComponent } from './add/add.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSlideToggleModule,
    MdSortModule,
    MdButtonModule,
    MdCardModule,
    MdTableModule,
    MdInputModule,
    MdSnackBarModule,
    SharedModule

    
  ],
  declarations: [
    StudentComponent,
    StudentDetailComponent,
    AddComponent
  ],
  providers:[StudentService],
  exports:[StudentComponent]
})
export class StudentModule { }
