import { CommonModule } from '@angular/common';
import { NavComponent } from './../nav/nav.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  isStudentValid: boolean = true;
  students: Student[] = [
    { id: 1, name: 'Alice Mike', age: 20 },
    { id: 2, name: 'Bob Jones', age: 22 },
    { id: 3, name: 'Charlie Sam', age: 21 },
  ];
  addStudent(stName: HTMLInputElement, stAge: HTMLInputElement) {
    this.isStudentValid = true;
    let newStudent: Student = {
      id: this.students[this.students.length - 1].id + 1,
      name: stName.value,
      age: Number(stAge.value),
    };
    if (isValid(newStudent) && !isExist(newStudent, this.students)) {
      this.students.push(newStudent);
      this.isStudentValid = true;
    } else {
      this.isStudentValid = false;
    }
  }
  deleteStudent(i: number): void {
    this.students.splice(i, 1);
  }
}

function isValid(s: Student): boolean {
  if (s.name.trim().length >= 3 && s.age >= 18) {
    return true;
  } else {
    return false;
  }
}

interface Student {
  id: number;
  name: string;
  age: number;
}

function isExist(st: Student, arr: Student[]): Student | undefined {
  return arr.find((s) => s.name == st.name && s.age == st.age);
}
