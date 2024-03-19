import { Component } from '@angular/core';
import { Student } from './student';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  students: Student[] = [
    {id: 1, name: "Artur", course: "Computação"},
    {id: 2, name: "Renato", course: "Computação"},
    {id: 3, name: "Amarga", course: "Matemática"},
  ];
  
}
