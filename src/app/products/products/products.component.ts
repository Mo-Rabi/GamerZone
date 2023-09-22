import { Component } from '@angular/core';
import productsJson from '../../../../products-list.json'
import {Product} from '../interface/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Array<Product> = productsJson

}
