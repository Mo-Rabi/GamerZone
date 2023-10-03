import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  signupSuccessful = false;


  constructor(private router: Router) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]{3,}$')]),
      repeatPassword: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]{3,}$')]),
      terms: new FormControl(false, Validators.requiredTrue)
    });
  }

  handleSubmitForm() {
    // Save user details to local storage
    const user = this.signupForm.value;
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User details saved:', user);
    this.signupSuccessful = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);

  }
}
