import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-your-notifaication',
  templateUrl: 'your-notifaication.html',
})
export class YourNotifaicationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourNotifaicationPage');
  }
  
 
}
