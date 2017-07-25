import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { StudentModule } from "./student/student.module";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { APIService } from './api.service';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StudentModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(APIService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
