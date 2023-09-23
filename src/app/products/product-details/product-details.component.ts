import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../interface/product'
import productJson from '../../../../products-list.json'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  activeId:string = ''
  products:Product[] =productJson;
  selectedProduct !: Product

  constructor(private activeRoute: ActivatedRoute){} //sevices

  ngOnInit(){
    this.activeId = this.activeRoute.snapshot.params['id']
    this.selectedProduct = this.products.find((product) => product.id === parseInt(this.activeId)) || {} as Product; 
    console.log(this.selectedProduct);
    }
  
}