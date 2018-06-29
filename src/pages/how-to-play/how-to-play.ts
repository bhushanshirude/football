import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-how-to-play',
  templateUrl: 'how-to-play.html',
})
export class HowToPlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToPlayPage');
  }

  ionViewWillEnter(){
    this.viewCtrl.showBackButton(true);
  }

}
