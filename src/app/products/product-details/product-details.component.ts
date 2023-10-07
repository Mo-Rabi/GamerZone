import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';
import { CartCounterService } from 'src/app/user/services/cart-counter.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  activeId!: any;
  selectedProduct!: any;
  cartItemsNum!: number;
  cartItems: Product[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private cartCounterService: CartCounterService
  ) {}

  ngOnInit() {
    this.activeId = this.activeRoute.snapshot.params['id'];
    this.productsService.getProductsDetails(this.activeId).subscribe(
      (data) => (this.selectedProduct = data),
      (error) => {
        console.log(error);
        if (error.status !== 'OK') {
          console.log(error);
          this.router.navigate(['/']);
        }
      }
    );

    // Cart counter service
    this.cartCounterService
      .getCounterVal()
      .subscribe((val) => (this.cartItemsNum = val));
  }

  onImageClicked(img: string) {
    // Update the large image when a thumbnail is clicked
    this.selectedProduct.thumbnail = img;
  }

  addToCart() {
    // Add Product to cart page
    this.cartCounterService.addToCart(this.selectedProduct);
    // Increment cart icon that holds the total number of products
    this.cartCounterService.setCounterVal(++this.cartItemsNum);
  }
}
