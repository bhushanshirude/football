import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { AddCashPage } from '../add-cash/add-cash';
import { AppLogoPage } from '../app-logo/app-logo';
import { CreateTeamPage } from '../create-team/create-team';
import { FantasyPointsPage } from '../fantasy-points/fantasy-points';
import { HelpPage } from '../help/help';
import { InviteFriendsPage } from '../invite-friends/invite-friends';
import { InviteCodePage } from '../invite-code/invite-code';
import { LegalityPage } from '../legality/legality';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { RejoinPage } from '../rejoin/rejoin';
import { WinningBreakupPage } from '../winning-breakup/winning-breakup';
import { WorkWithUsPage } from '../work-with-us/work-with-us';
import { MyTeamPage } from '../my-team/my-team';



@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  InviteFriends() {
    this.navCtrl.push(InviteFriendsPage);
  }
  ContestsInvite() {
    this.navCtrl.push(InviteCodePage);
  }

  FantasyPoints() {
    this.navCtrl.push(FantasyPointsPage);
  }

  HowPlay() {
    this.navCtrl.push(HowToPlayPage);
  }

  Helpdesk() {
    this.navCtrl.push(HelpPage);
  }

  WorkUs() {
    this.navCtrl.push(WorkWithUsPage);
  }

  AboutUs() {
    this.navCtrl.push(AboutPage);
  }

  Legality() {
    this.navCtrl.push(LegalityPage);
  }

  add() {
    this.navCtrl.push(AddCashPage);
  }
  app() {
    this.navCtrl.setRoot(AppLogoPage);
  }
  create() {
    this.navCtrl.push(CreateTeamPage);
  }
  rejoin() {
    this.navCtrl.push(RejoinPage);
  }
  winning() {
    this.navCtrl.push(WinningBreakupPage);
  }
  my(){
    this.navCtrl.push(MyTeamPage);
  }
}
