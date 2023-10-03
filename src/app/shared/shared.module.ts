import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,RouterModule, HttpClientModule
  ],
  exports:[
    NavbarComponent,
    NotFoundComponent,
    FooterComponent
  ]
})
export class SharedModule { }
