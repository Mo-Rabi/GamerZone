import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';



@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent,
    AccountVerificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    AccountVerificationComponent,
    PasswordResetComponent,
  ]
})
export class AuthenticationModule { }
