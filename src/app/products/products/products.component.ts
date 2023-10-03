import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!: any[];
  filteredProducts: any;


  constructor (private productsService:ProductsService, private searchService: SearchService){}

  ngOnInit(){
    this.productsService.getProductsList().subscribe(data => {
      this.products = data as any[];
      this.filteredProducts = this.products;
      console.log(this.products)})

      this.searchService.searchObservable.subscribe(searchTerm => {
        this.searchProducts(searchTerm);
      });
  }
  
  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value.length >= 1) {
      this.searchService.search(value); // Emit the search term
    } else {
      this.filteredProducts = this.products; // If less than 2 characters, show all products
    }
  }

   searchProducts(searchTerm: string) {
    if (!searchTerm) {
      this.filteredProducts = this.products; // If no search term, show all products
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) // Adjust this line based on your product structure
      );
    }
  }

}
