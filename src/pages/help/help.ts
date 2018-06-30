import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
public value;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
/************/

  DEPOSITS(){
    this.value='deposite';
  }
  desp(){
    this.value='deposite !=deposite'
  }
  /************/

  WITHDRAWALS(){
    this.value='withdraw';
  }
  with(){
    this.value='withdraw !=withdraw'
  }
  /************/

  POINTS(){
    this.value='points';
  }
  poin(){
    this.value='points !=points'
  }
  /************/

  PLAYING(){
    this.value='playing';
  }
  play(){
    this.value='playing !=playing'
  
}
/************/

  WINNINGS(){
    this.value='winnings';
  }
  winn(){
    this.value='winnings !=winnings'
  }
  /************/

  VERIFICATION(){
    this.value='verification';
  }
  veri(){
    this.value='verification !=verification'
  }
  /************/

  REFDERRAL(){
    this.value='referral';
  }
  refe(){
    this.value='referral !=referral'
  }

  /************/

  PROFILE(){
    this.value='profile';
  }
  prof(){
    this.value='profile !=profile'
  }
  /************/
  LOGIN(){
    this.value='login';
  }
  logi(){
    this.value='login !=login'
  }
}
