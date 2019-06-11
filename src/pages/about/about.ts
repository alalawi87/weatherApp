import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
user="";
countryarea:any;

countRec:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private service:ServiceProvider) {
   this.user= this.navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  ngOnInit(){

 //   this.service.getData().subscribe(data=>{this.countryarea=data; this.countRec=this.countryarea.length;})
   
    this.countryarea="ddd";
   
   }
}
