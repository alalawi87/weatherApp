import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherResultProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherResultProvider {
  ApiUrl:any;
  ApiUrl1="http://api.openweathermap.org/data/2.5/weather?q="
  ApiUrl2="&appid=60839062b7f0b47ba64c2b045456c437"
  constructor(public http: HttpClient) {
    console.log('Hello WeatherResultProvider Provider');
  }
  getresult(c:any,s:any){
  //  console.log("dd");

this.ApiUrl=this.ApiUrl1+c+","+s+this.ApiUrl2;
    return this.http.get(this.ApiUrl);
  }
}
