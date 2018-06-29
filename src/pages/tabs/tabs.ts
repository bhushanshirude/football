import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MePage } from '../me/me';
import { MyContestsPage } from '../my-contests/my-contests';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyContestsPage;
  tab3Root = MePage;
  tab4Root = MorePage;

  constructor() {

  }
}
