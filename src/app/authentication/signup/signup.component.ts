import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  signupForm: FormGroup;

  constructor(){
    this.signupForm = new FormGroup({
      name:new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required
        ,Validators.pattern('^[A-Z][a-zA-Z]{3,}$')
      ]) ,
      repeatPassword: new FormControl('', [Validators.required
         ,Validators.pattern('^[A-Z][a-zA-Z]{3,}$')
        ]),
      terms: new FormControl(false  , Validators.requiredTrue)
    })
  }

  handleSubmitForm(){
    console.log(this.signupForm.value);
  }
}

