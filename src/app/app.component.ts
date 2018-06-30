import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
// for welcome page
import { Storage } from '@ionic/storage';
//* * this is for welcome page* */
// import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
// import { WelcomePage } from '../pages/welcome/welcome';
// import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


//* * this is for welcome page* */

      // storage.get('logincheck').then((val) => {
      //   console.log('Check login =>', val);
      //   if(val=="true"){
      //     this.rootPage=HomePage;
      //   }else{
      //     this.rootPage=WelcomePage;
      //   }
      // });
    });
  }
}
