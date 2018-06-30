import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ShrinkingSegmentHeaderComponent } from '../components/shrinking-segment-header/shrinking-segment-header';
import { AboutPage } from '../pages/about/about';
import { AddCashPage } from '../pages/add-cash/add-cash';
import { AppLogoPage } from '../pages/app-logo/app-logo';
import { CreateTeamPage } from '../pages/create-team/create-team';
import { CricketPage } from '../pages/cricket/cricket';
import { FantasyPointsPage } from '../pages/fantasy-points/fantasy-points';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { HowToPlayPage } from '../pages/how-to-play/how-to-play';
import { InviteCodePage } from '../pages/invite-code/invite-code';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { LoginPage } from '../pages/login/login';
import { LegalityPage } from '../pages/legality/legality';
import { MePage } from '../pages/me/me';
import { MorePage } from '../pages/more/more';
import { MyContestsPage } from '../pages/my-contests/my-contests';
import { MyTeamPage } from '../pages/my-team/my-team';
import { RejoinPage } from '../pages/rejoin/rejoin';
import { WelcomePage } from '../pages/welcome/welcome';
import { WinningBreakupPage } from '../pages/winning-breakup/winning-breakup';
import { WorkWithUsPage } from '../pages/work-with-us/work-with-us';
import { YourNotifaicationPage } from '../pages/your-notifaication/your-notifaication';
import { TabsPage } from '../pages/tabs/tabs';
import { SingUpPage } from '../pages/sing-up/sing-up';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//welcome page
// install that cammand : ionic cordova plugin add cordova-sqlite-storage
import { IonicStorageModule, Storage } from '@ionic/storage'; 
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddCashPage,
    AppLogoPage,
    CreateTeamPage,
    CricketPage,
    FantasyPointsPage,
    ForgotPasswordPage,
    HelpPage,
    HomePage,
    HowToPlayPage,
    InviteCodePage,
    InviteFriendsPage,
    LegalityPage,
    LoginPage,
    MePage,
    MorePage,
    MyContestsPage,
    MyTeamPage,
    RejoinPage,
    SingUpPage,
    WelcomePage,
    WinningBreakupPage,
    WorkWithUsPage,
    TabsPage,
    YourNotifaicationPage,
    ShrinkingSegmentHeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddCashPage,
    AppLogoPage,
    CreateTeamPage,
    CricketPage,
    FantasyPointsPage,
    ForgotPasswordPage,
    HelpPage,
    HomePage,
    HowToPlayPage,
    InviteCodePage,
    InviteFriendsPage,
    LegalityPage,
    LoginPage,
    MePage,
    MorePage,
    MyContestsPage,
    MyTeamPage,
    RejoinPage,
    SingUpPage,
    WelcomePage,
    WinningBreakupPage,
    WorkWithUsPage,
    TabsPage,
    YourNotifaicationPage,
    ShrinkingSegmentHeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
