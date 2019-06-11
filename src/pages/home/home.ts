import { Component } from '@angular/core';
import { NavController,AlertController, reorderArray } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { DetialsPage } from '../detials/detials';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from '../../providers/service/service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public inputval:string;
public reorderT=true;
contant="ahmed";
contantimage="assets/imgs/logo.png";
username :string="";

countryarea:any;
countryareatoadd:any;
countRec:any;

  constructor(public navCtrl: NavController,private AlertCtrl:AlertController, private http: HttpClient, private service:ServiceProvider) {
   
  }
  ngOnInit(){

   this.service.getData("local").subscribe(data=>{this.countryarea=data; this.countRec=this.countryarea.length;})
   this.service.getData("add").subscribe(data=>{this.countryareatoadd=data; })
  
  //this.countryarea$=[];
   
   //this.countryarea$=[ {"country":"bahrain","city":"manama"}  ];
  
  }
  deletelocation(i){
this.countryarea.splice(i,1);

  }
  toggle()
  {
    this.reorderT=!this.reorderT;

  }
  Reorder($event)
  {
    reorderArray(this.countryarea,$event);
  }
  bclick(){

    alert(this.inputval);
  }
  aboutcontant(){
    this.navCtrl.push(AboutPage,{text:this.username});
  }
  getloctions(){

   return  this.countryarea;


  }
  addcontant()
  {
    let adCte=this.AlertCtrl.create(
      {
        title:"addcontact",
        message:"enter code",
        inputs: [
          {
            type: "text",
            name: "City",
            placeholder: "City"
          },
          {
            type: "text",
            name: "Country",
            placeholder:"Country"
          }],
        buttons:[
          {text:"cencel"},
          {text:"add ",handler:(newContact)=>{
            this.countryarea.push(

              {
                "country": newContact.Country,
                "city": newContact.City
              }
            );


          }
          
          
           

          
        
        }
        ]

      });

      adCte.present();
  }

  detailsContact(item,i){
    
   
  this.navCtrl.push(DetialsPage,{cte:item})
  }

}
