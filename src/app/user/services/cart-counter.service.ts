import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  private counter = new BehaviorSubject<number>(0);
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor() {}

  //!total items number regardless of product
  getCounterVal() {
    return this.counter.asObservable();
  }

  setCounterVal(newVal: number) {
    this.counter.next(newVal);
  }

//! Cart items and their numbers
  getCart(): BehaviorSubject<any[]> {
    return this.cartSubject;
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((p: any) => p.id === product.id);

    if (existingProduct) {
      // Product is already in the cart; increment its quantity
      existingProduct.quantity++;
    } else {
      // Product is not in the cart; add it
      product.quantity = 1;
      this.cart.push(product);
    }
    
    //? Update the cart subject with the updated cart array
    this.cartSubject.next(this.cart);
  }

  removeFromCart(product: any) {
    const index = this.cart.findIndex((p: any) => p.id === product.id);

    if (index !== -1) {
      const productToRemove = this.cart[index];
      if (productToRemove.quantity > 1) {
        // If there's more than one of the same product, decrement quantity
        productToRemove.quantity--;
      } else {
        // If there's only one, remove it from the cart
        this.cart.splice(index, 1);
      }

      //? Update the cart subject with the updated cart array
      this.cartSubject.next(this.cart);
    }
  }
}