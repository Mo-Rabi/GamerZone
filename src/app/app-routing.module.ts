import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { PointsComponent } from './products/points/points.component';
import { LoginComponent } from './authentication/login/login.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { CartComponent } from './user/cart/cart.component';
import { SignupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  {path: '',component: ProductsComponent,},
  {path: 'products',component: ProductsComponent,// children:[//   {//     path:'products/add',//     component:AddProductComponent//   }// ]
  },
  {path:'products/add',component:AddProductComponent},
  { path: 'product/:id',component: ProductDetailsComponent,},
  {path: 'points',component:PointsComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  { path: 'signup', component: SignupComponent },
  {path:'cart',component:CartComponent,},
  {path: '**',component: NotFoundComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
