import { Component, Input} from '@angular/core';
import productsJson from '../../../../products-list.json'
import {Product} from '../interface/product'
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!:Product
}
