import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //this is a service
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsList(){
    return this.http.get(`${environment.baseURL}/gamehub`,{
      // params:{
      //   id:'2'
      // },
      // headers:{
      //   'Authentication':'token a3g3t51453t514@@3rsdf!@6d'
      // }
    })
  }

  
  getProductsDetails(id: string){
    return this.http.get(`${environment.baseURL}/gamehub/${id}`)
  }

  
}
