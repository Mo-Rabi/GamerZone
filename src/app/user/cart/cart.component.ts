import { Component, Input} from '@angular/core';
import { CartCounterService } from '../services/cart-counter.service';
import { Product } from 'src/app/products/interface/product';
import { ProductsService } from 'src/app/products/services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItemsNum = 0
  constructor(private cartCounterService: CartCounterService, private productsService: ProductsService){}

  cartItems: Product[] = []
  products!:any
  cartItem!:any

  //selectedProduct !:Product


  ngOnInit(){
    this.cartCounterService.getCounterVal().subscribe((val) =>this.cartItemsNum = val)
    this.cartCounterService.getCart().subscribe((cart) => {this.cartItems = cart; console.log(this.cartItems);});
    this.productsService.getProductsList().subscribe(data => {
      this.products = data as any[];})
  }

  addToCart(item:Product) {
    console.log(item);
    //console.log(this.cartItem); //logs undefined
    //? Add Product to cart page
    this.cartCounterService.addToCart(item);

    //? update total price
    

  
    //? increment cart icon that holds the total number of products
    this.cartCounterService.setCounterVal(++this.cartItemsNum)


  }

  removeFromCart(item:Product){
    console.log(item);
    if (this.cartItemsNum > 0){
      this.cartCounterService.setCounterVal(--this.cartItemsNum)
      this.cartCounterService.removeFromCart(item);
    }
  }

  //! Calculate the total price of all products in the cart
  calculateTotalCartPrice(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  }



  
}
  