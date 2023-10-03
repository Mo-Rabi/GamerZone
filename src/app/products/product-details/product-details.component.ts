import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../interface/product'
import { ProductsService } from '../services/products.service';
import { CartCounterService } from 'src/app/user/services/cart-counter.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  activeId:string = ''
  //products:any =
  selectedProduct !:any
  cartItemsNum!:number
  cartItems: Product[] = []

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private cartCounterService: CartCounterService

    ){} //sevices

  ngOnInit(){
    this.activeId = this.activeRoute.snapshot.params['id']
    this.productsService
    .getProductsDetails(this.activeId).subscribe(
      (data) =>this.selectedProduct = data,
      (error)=>{
      console.log(error);
      if(error.status != 'OK'){
        this.router.navigate(['/'])
      }
      
    });

    //cart counter service
    this.cartCounterService.getCounterVal().subscribe((val) =>this.cartItemsNum = val)
  }


  //!Add product's details to the cart page && update total number of items in cart
addToCart() {
  //? Add Product to cart page
  this.cartCounterService.addToCart(this.selectedProduct);

  //? increment cart icon that holds the total number of products
  this.cartCounterService.setCounterVal(++this.cartItemsNum)
}


  


  }
