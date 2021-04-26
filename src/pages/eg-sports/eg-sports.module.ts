import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EgSportsPage } from './eg-sports';

@NgModule({
  declarations: [
    EgSportsPage,
  ],
  imports: [
    IonicPageModule.forChild(EgSportsPage),
  ],
})
export class EgSportsPageModule {}
