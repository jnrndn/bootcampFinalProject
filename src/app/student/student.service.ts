import { Student } from './student';
import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class StudentService {

  URL:string ='api/students';


  constructor( private http: Http) { }


  getStudents():Observable<Response>{
    return this.http.get(this.URL);
  }
  
  getstudent(id):Promise<Student>{
    return this.http.get(`${this.URL}/${id}`)
      .toPromise()
      .then(response => response.json().data as Student);

  }
}