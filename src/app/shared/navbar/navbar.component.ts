import { Component } from '@angular/core';
import { CartCounterService } from 'src/app/user/services/cart-counter.service';
import { SearchService } from 'src/app/products/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  cartItemsNum = 0
  constructor(private cartCounterService: CartCounterService, private searchService: SearchService){}

  ngOnInit(){
    this.cartCounterService.getCounterVal().subscribe((val) =>this.cartItemsNum = val)
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value.length >= 1) {
      this.searchService.search(value);
      console.log(value);
    } else {
      this.searchService.search(''); // Send an empty string to show all products
    }
  }
}
