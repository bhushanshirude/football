import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegalityPage } from './legality';

@NgModule({
  declarations: [
    LegalityPage,
  ],
  imports: [
    IonicPageModule.forChild(LegalityPage),
  ],
})
export class LegalityPageModule {}
