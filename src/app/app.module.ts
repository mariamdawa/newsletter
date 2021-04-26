import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {WorldPage} from '../pages/world/world';
import {EgyptPage} from '../pages/egypt/egypt';
import { DataProvider } from '../providers/data/data';
import {HttpClientModule} from '@angular/common/http';
import { EgHealthPage } from '../pages/eg-health/eg-health';
import { EgBusinessPage } from '../pages/eg-business/eg-business';
import { EgSciPage } from '../pages/eg-sci/eg-sci';
import { EgSportsPage } from '../pages/eg-sports/eg-sports';
import { EgEnterPage } from '../pages/eg-enter/eg-enter';
import { EgTechPage } from '../pages/eg-tech/eg-tech';

import {WdBusinessPage} from '../pages/wd-business/wd-business';
import {WdEntPage} from '../pages/wd-ent/wd-ent';
import {WdHealthPage} from '../pages/wd-health/wd-health';
import {WdSciPage} from "../pages/wd-sci/wd-sci";
import {WdSportsPage} from '../pages/wd-sports/wd-sports';
import {WdTechPage} from '../pages/wd-tech/wd-tech';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WorldPage,
    EgyptPage,EgHealthPage, EgSciPage, EgBusinessPage, EgTechPage, EgEnterPage, EgSportsPage,
    WdTechPage, WdHealthPage,WdSciPage, WdEntPage,WdSportsPage,
    WdBusinessPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WorldPage,
    EgyptPage,
    EgHealthPage, EgSciPage, EgBusinessPage, EgTechPage, EgEnterPage, EgSportsPage,
     
    WdTechPage, 
    WdHealthPage,
     WdSciPage,
     WdEntPage,
     WdSportsPage,
    WdBusinessPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Facebook
  ]
})
export class AppModule {}
