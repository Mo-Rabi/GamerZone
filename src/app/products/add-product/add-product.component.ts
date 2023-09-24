import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  formSubmitted = false
  handleFormSubmit(form:any){
    console.log(form);
    this.formSubmitted = true;
  }
}
