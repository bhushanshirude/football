import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-app-logo',
  templateUrl: 'app-logo.html',
})
export class AppLogoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppLogoPage');
  }

  slides = [
    {
      image: "assets/imgs/kkr.png",
      images: "assets/imgs/dd.png",
      title:"ABC Vs CDE"

    },
    {
      image: "assets/imgs/kkr.png",
      images: "assets/imgs/dd.png",
      title:"ABC Vs CDE"

    },
     {
      image: "assets/imgs/dd.png",
      images: "assets/imgs/kkr.png",
      title:"ABC Vs CDE"

    },
     {
      image: "assets/imgs/dd.png",
      images: "assets/imgs/kkr.png",
      title:"ABC Vs CDE"

    },
     {
      image: "assets/imgs/kkr.png",
      images: "assets/imgs/kkr.png",
      title:"ABC Vs CDE"

    },
    {
      image: "assets/imgs/dd.png",
      images: "assets/imgs/dd.png",
      title:"ABC Vs CDE"

    },
     {
      image: "assets/imgs/kkr.png",
      images: "assets/imgs/kkr.png",
      title:"ABC Vs CDE"

    },
    {
      image: "assets/imgs/dd.png",
      images: "assets/imgs/dd.png",
      title:"ABC Vs CDE"

    },
     {
      image: "assets/imgs/kkr.png",
      images: "assets/imgs/dd.png",
      title:"ABC Vs CDE"

    },
     {
      image: "assets/imgs/kkr.png",
      images: "assets/imgs/kkr.png",
      title:"ABC Vs CDE"

    }]
}
