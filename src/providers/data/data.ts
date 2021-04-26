import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  // private apiUrl = 'https://restcountries.eu/rest/v2/all';
  constructor(public http: HttpClient) {
    
  }
getEgyptianBrNews(){
   return    this.http.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=cda2800c76d649bd8f9ba26eb67a48b2');
      
    }
getWorldWideBrNews(){
      return    this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cda2800c76d649bd8f9ba26eb67a48b2');
         
       }
}
