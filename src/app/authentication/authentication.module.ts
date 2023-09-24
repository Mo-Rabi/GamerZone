import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { SignupComponent } from './signup/signup.component';
//import { FormsModule } from '@angular/forms'; used for template driven
import { ReactiveFormsModule } from '@angular/forms'; //used for reactive forms



@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent,
    AccountVerificationComponent,
    SignupComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    AccountVerificationComponent,
    PasswordResetComponent,
    SignupComponent
  ]
})
export class AuthenticationModule { }
