import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WdBusinessPage } from './wd-business';

@NgModule({
  declarations: [
    WdBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(WdBusinessPage),
  ],
})
export class WdBusinessPageModule {}
