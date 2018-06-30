import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-how-to-play',
  templateUrl: 'how-to-play.html',
})
export class HowToPlayPage {
  public value;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToPlayPage');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
  }
  INTRODUCTION() {
    this.value = "introduction";
  }
  into() {
    this.value = 'introduction !=introduction'
  }

  CREATING() {
    this.value = "creating";
  }
  crea() {
    this.value = 'creating !=creating'
  }
  MAINDING() {
    this.value = 'mainting';
  }
  main() {
    this.value = 'mainting !=mainting'
  }

  FAQs() {
    this.value="faqs";
  }
  faq() {
    this.value = 'faqs !=faqs'
  }
}
