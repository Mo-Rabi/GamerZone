import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {Product} from '../interface/product'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartCounterService } from 'src/app/user/services/cart-counter.service';
import { ProductsService } from '../services/products.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  
})



export class ProductCardComponent {
 
  @Input() product!:any
  carouselId: string;

  cartItems: Product[] = []
  products!:any
  watchlist!:Product[]
  watchlistStatus:boolean= true

  constructor(
    private router: Router,
    private cartCounterService: CartCounterService,
    private productsService:ProductsService
  ) {
    

  }
  redirectToProductDetails(id:number) {
    console.log(id);
    this.productsService.getProductsDetails(id)
    this.router.navigate([`product/details/${id}`])
  }

    
//Injecting cartCounter service
cartItemsNum = 0

ngOnInit(){
  this.cartCounterService.getCounterVal().subscribe((val) =>this.cartItemsNum = val)
  this.productsService.getProductsList().subscribe(data => {this.products = data;})
  this.cartCounterService.getCart().subscribe((cart) => {this.cartItems = cart;});
   // Generate a unique carousel ID based on the product's ID or any unique property
    this.carouselId = 'carouselExampleCaptions' + this.product._id;
  }

  increment(){
  }
  
//!Add product's details to the cart page && update total number of items in cart
addToCart() {
  //? Add Product to cart page
  this.cartCounterService.addToCart(this.product);
  //? increment cart icon that holds the total number of products
  this.cartCounterService.setCounterVal(++this.cartItemsNum)
}
  
  // addToCart(id:string){
  //   let productToAdd= this.products.find((addedProduct:Product) => addedProduct.id == id)
  //   this.cartItems.push(productToAdd)
  //   console.log(this.cartItems);
  // }

  //? Add/ remove product to/ from watchlist then add it to Local storage
  // addToWatchlist(product){
  //   //*if product id isn't found, add it to watchlist array
  //  if ( !this.watchlist.includes(product.id,0)){
  //   this.watchlist.push(product.id)
  //   console.log(this.watchlist);
  //   product.watchlistStatus = !product.watchlistStatus;

  //   //*if product id is already inside watchlist array found, remove it
  //   }else{
  //     let productToRemove = this.watchlist.indexOf(product.id)
  //     this.watchlist.splice(productToRemove,1)
  //     console.log(this.watchlist);
  //     product.watchlistStatus = !product.watchlistStatus;
  //   }
  //   localStorage.setItem("watchlist",JSON.stringify(this.watchlist))
  // }

  //  //?get watchlist items on homepage component initialization
  // getWatchlist(){
  //    this.watchlist= JSON.parse(localStorage.getItem('watchlist')??'[]')
  //    console.log(this.watchlist);
  //    console.log(this.products);
  // }
}

