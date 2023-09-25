import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //this is a service

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsList(){
    return this.http.get('https://api.noroff.dev/api/v1/gamehub',{
      params:{
        id:'2'
      },
      headers:{
        'Authentication':'token a3g3t51453t514@@3rsdf!@6d'
      }
    })
  }

  
  getProductsDetails(){}
}
