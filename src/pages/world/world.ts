import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import {WdBusinessPage} from '../../pages/wd-business/wd-business';
import {WdEntPage} from '../../pages/wd-ent/wd-ent';
import {WdHealthPage} from '../../pages/wd-health/wd-health';
import {WdSciPage} from "../../pages/wd-sci/wd-sci";
import {WdSportsPage} from '../../pages/wd-sports/wd-sports';
import {WdTechPage} from '../../pages/wd-tech/wd-tech';

/**
 * Generated class for the WorldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-world',
  templateUrl: 'world.html',
})
export class WorldPage {
  brNews;
  x;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.dataProvider.getWorldWideBrNews().subscribe((news)=>{
      //  let x=JSON.stringify(news);
      //  console.log(x);
       this.brNews=news;
       this.x=this.brNews.articles;
    })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldPage');
  }
  onTech(){
    this.navCtrl.push(WdTechPage);
  }
  onSci(){
    this.navCtrl.push(WdSciPage);
  }
  onEnt(){
    this.navCtrl.push(WdEntPage);
  }
  onSports(){
    this.navCtrl.push(WdSportsPage);
  }
  onBus(){
    this.navCtrl.push(WdBusinessPage);
  }
  onHealth(){
    this.navCtrl.push(WdHealthPage);
  }
}
