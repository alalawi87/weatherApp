import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
ApiUrl="assets/countryarea.json";
ApiUrl2="assets/citylist.json";
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
getData(choose:any){
if (choose=="local")
  return this.http.get(this.ApiUrl);
  else
  return this.http.get(this.ApiUrl2);
}
}
