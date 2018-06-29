import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FantasyPointsPage } from './fantasy-points';

@NgModule({
  declarations: [
    FantasyPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(FantasyPointsPage),
  ],
})
export class FantasyPointsPageModule {}
