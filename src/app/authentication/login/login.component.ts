// login.component.ts

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoggedIn: boolean = false

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  handleSubmitForm(e:Event) {
    e.preventDefault()
    let storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const { email, password } = this.loginForm.value;
  
      if (email === user.email && password === user.password) {
        console.log('Login successful:', user);
        this.isLoggedIn = true
        // Set a flag in the local storage to indicate that the user is logged in
        localStorage.setItem('isLoggedIn', 'true');
        console.log(user);
        // Navigate to the homepage upon successful login
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000); // Replace '/' with the route of your homepage
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('No user details found. Please sign up.');
    }
  }
}
