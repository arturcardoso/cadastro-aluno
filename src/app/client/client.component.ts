import { Component } from '@angular/core';
import { Student } from './student';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  students: Student[] = [];

  formGroupStudents: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupStudents =formBuilder.group({
      id : [''],
      name : [''],
      course : [''],
    });
  }

  save(){
    this.students.push(this.formGroupStudents.value);
  }
  
}











