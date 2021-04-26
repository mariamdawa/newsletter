import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WdSportsPage } from './wd-sports';

@NgModule({
  declarations: [
    WdSportsPage,
  ],
  imports: [
    IonicPageModule.forChild(WdSportsPage),
  ],
})
export class WdSportsPageModule {}
