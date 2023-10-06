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


  getProductsList(){
    //!Fetch games from public API
    // const fetchGames = this.http.get(`${environment.baseURL}/gamehub`,)
    //  console.log(fetchGames);

    // //!Fetch Products from my custom API built using MongoDB => unknown error

  const fetchCustomAPIProducts = this.http.get('https://us-east-1.aws.data.mongodb-api.com/app/data-azbot/endpoint/products')
  return fetchCustomAPIProducts
    // //? Connect the results of both APIs into single array
    // return forkJoin([fetchGames, fetchProducts]).pipe(
    //   map(([gamesResponse, productsResponse]) => {
    //     return Object.assign({}, gamesResponse, productsResponse);})
    // );
  }
  getProductsDetails(id: number){
    return this.http.get(`https://us-east-1.aws.data.mongodb-api.com/app/data-azbot/endpoint/products?id=${id}`)
  }

}
//! WORKING SERVER FUNCTION FIND ALL DOCUMENTS IN DATABASE
// exports = async function(){
//   // This default function will get a value and find a document in MongoDB
//   // To see plenty more examples of what you can do with functions see: 
//   // https://www.mongodb.com/docs/atlas/app-services/functions/

//   // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
//   var serviceName = "ClusterM0";

//   // Update these to reflect your db/collection
//   var dbName = "GamerZone";
//   var collName = "Products";

//   // Get a collection from the context
//   var collection = context.services.get(serviceName).db(dbName).collection(collName);

//   var findResult;
//   try {
//     // Get a value from the context (see "Values" tab)
//     // Update this to reflect your value's name.
//     var valueName = "value_name";
//     var value = context.values.get(valueName);

//     // Execute a FindOne in MongoDB 
//     findResult = await collection.find();

//   } catch(err) {
//     console.log("Error occurred while executing findOne:", err.message);

//     return { error: err.message };
//   }

//   // To call other named functions:
//   // var result = context.functions.execute("function_name", arg1, arg2);

//   return  findResult
// };