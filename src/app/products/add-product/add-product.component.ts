import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private http:HttpClient){}

  formSubmitted = false

  handleFormSubmit(form:any){
    // Process comma-separated image URLs into an array
    const imageUrls: string[] = form.value.imageUrls.split(',').map(url => url.trim());
    
    // Create the payload to send in the POST request
    const productData = {
      title: form.value.ProductName,
      description: form.value.description,
      price: {
        $numberDecimal: form.value.price.toString()
      },
      discountPercentage: 0,
      rating: 5.0,
      stock: form.value.stock,
      brand: form.value.brand,
      category: form.value.category,
      thumbnail: form.value.thumbnail,
      images: imageUrls
    };

     // Send a POST request to your API
     this.http.post("https://us-east-1.aws.data.mongodb-api.com/app/data-azbot/endpoint/add_product", productData)
     .subscribe(response => {
       console.log('Product added successfully:', response);
       // Handle success, e.g., show a success message or navigate to another page
     }, error => {
       console.error('Error adding product:', error);
       // Handle error, e.g., show an error message
     });

    this.formSubmitted = true;
  }
}
