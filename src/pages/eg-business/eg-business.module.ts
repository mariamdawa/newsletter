import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EgBusinessPage } from './eg-business';

@NgModule({
  declarations: [
    EgBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(EgBusinessPage),
  ],
})
export class EgBusinessPageModule {}
