import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WdHealthPage } from './wd-health';

@NgModule({
  declarations: [
    WdHealthPage,
  ],
  imports: [
    IonicPageModule.forChild(WdHealthPage),
  ],
})
export class WdHealthPageModule {}
