import { Student } from './student';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class StudentService {

  URL:string ='api/students';
  private headers = new Headers({ 'Content-type': 'application/json' });


  constructor( private http: Http) { }


  getStudents():Observable<Response>{
    return this.http.get(this.URL);
  }
  
  getstudent(id):Promise<Student>{
    return this.http.get(`${this.URL}/${id}`)
      .toPromise()
      .then(response => response.json().data as Student)
      .catch(this.handleError);
  }

  update(student: Student): Promise<Student> {
    return this.http.put(`${this.URL}/${student.id}`, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  delete(id: number): Promise<any>{
    return this.http.delete(`${this.URL}/${id}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  create(student: Student): Promise<any>{
    return this.http.post(this.URL, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Student)
      .catch(this.handleError);
  }


  private handleError(error :any): Promise<any> {
    console.log('An error ocurred ', error);
    return Promise.reject(error.message || error);
    
  }
}