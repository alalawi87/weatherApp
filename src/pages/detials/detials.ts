import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { WeatherResultProvider } from '../../providers/weather-result/weather-result';
/**
 * Generated class for the DetialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detials',
  templateUrl: 'detials.html',
})
export class DetialsPage {
contactdetails:any;
countryarea:any;
weatherdescription:any;
temp:any;
pressure:any;
humidity:any;
cityid:any;
temp2:any;
countryid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private service:WeatherResultProvider) {

    this.contactdetails=this.navParams.data.cte;
    console.log( this.contactdetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetialsPage');
  }
  ngOnInit(){
    this.cityid=this.contactdetails.city;
    this.countryid=this.contactdetails.country;
 //this.service.getresult(this.cityid, this.countryid).subscribe(data=>{this.temp=data["main"]["temp"]; });
 this.service.getresult(this.cityid, this.countryid).subscribe(data=>{this.temp=data; });
 

 // console.log(this.temp.toString());
 //this.service.getresult(this.city).subscribe(data=>{this.countryarea=data["main"]; });
 
      }
}
