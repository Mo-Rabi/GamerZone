import { NgModule, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SellerComponent } from './seller/seller.component';
import { RouterModule } from '@angular/router';


 
@NgModule({
  declarations: [
    CartComponent,
    ProfileComponent,
    SellerComponent,
  ],
  imports: [
    CommonModule, RouterModule,
    
  ],
  exports:[
    CartComponent,
    ProfileComponent,
    SellerComponent,
  ]
})
export class UserModule { }
