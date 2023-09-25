import { Component, Input} from '@angular/core';
import {Product} from '../interface/product'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartCounterService } from 'src/app/user/services/cart-counter.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!:Product

  constructor(
    private router: Router,
    private cartCounterService: CartCounterService
  ) {}
  redirectToProductDetails(id:number) {
    this.router.navigate(['product',id]);
  }

    
//Injecting cartCounter service
cartItemsNum = 0

ngOnInit(){
  this.cartCounterService.getCounterVal().subscribe((val) =>this.cartItemsNum = val)
}

increment(){
  this.cartCounterService.setCounterVal(++this.cartItemsNum)
}

}
