import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true, 
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  users = [{
    name: 'Ritik Wandale',
    email: 'ritik@gmail.com',
    phone: '1234567890',
    age: 27,
    salary: 10000
  },
  { 
    name: 'Shyam Tiwari',
    email: 'Shyam@gmail.com',
    phone: '653422390',
    age: 20,
    salary: 30000
  }
]
  inputValue = 'entered value';
  onInput(e: Event){
    console.log('called');
    const target = e.target as HTMLInputElement;
    const value = target.value;
    // console.log(value);
    this.inputValue = value;
  }
}
