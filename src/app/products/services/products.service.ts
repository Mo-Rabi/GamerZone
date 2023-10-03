import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //this is a service
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    console.log(environment.apikey);
    console.log(environment.myAPI);
    console.log(environment.baseURL);
  }

  getProductsList(){
    //!Fetch games from public API
    const fetchGames = this.http.get(`${environment.baseURL}/gamehub`,)
    //return fetchGames

    //!Fetch Products from my custom API built using MongoDB
    const headers = new HttpHeaders().set('apikey', environment.apikey);
    const fetchProducts = this.http.get(environment.myAPI, { headers });

    //? Connect the results of both APIs into single array
    return forkJoin([fetchGames, fetchProducts]).pipe(
      map(([gamesResponse, productsResponse]) => {
        return Object.assign({}, gamesResponse, productsResponse);})
    );
  }

  
  getProductsDetails(id: string){
    return this.http.get(`${environment.baseURL}/gamehub/${id}`)
  }

}
