import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url= "http://localhost:3000/students";
  
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }
  
  save(student:Student): Observable<Student>{
    return this.http.post<Student>(this.url, student);
  }
}
