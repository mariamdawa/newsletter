import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EgHealthPage } from './eg-health';

@NgModule({
  declarations: [
    EgHealthPage,
  ],
  imports: [
    IonicPageModule.forChild(EgHealthPage),
  ],
})
export class EgHealthPageModule {}
