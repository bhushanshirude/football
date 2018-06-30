import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// welcome page
// import { LoginPage } from '../login/login';
// import { SingUpPage } from '../sing-up/sing-up';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  //**Welcome page* */
  // login(){
  //   this.navCtrl.setRoot(LoginPage);
  // }

  // sing(){
  //   this.navCtrl.setRoot(SingUpPage);
  // }
}
