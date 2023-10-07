import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PointsComponent } from './points/points.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsComponent,
    ProductDetailsComponent,
    PointsComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgbCarouselModule,
    RouterModule
  ],
  exports:[
    ProductCardComponent,
    ProductsComponent,
    ProductDetailsComponent,
    PointsComponent,
    AddProductComponent
  ]
})
export class ProductsModule { }
