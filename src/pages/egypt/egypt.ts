import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import { EgHealthPage } from '../../pages/eg-health/eg-health';
import { EgBusinessPage } from '../../pages/eg-business/eg-business';
import { EgSciPage } from '../../pages/eg-sci/eg-sci';
import { EgSportsPage } from '../../pages/eg-sports/eg-sports';
import { EgEnterPage } from '../../pages/eg-enter/eg-enter';
import { EgTechPage } from '../../pages/eg-tech/eg-tech';
/**
 * Generated class for the EgyptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-egypt',
  templateUrl: 'egypt.html',
})
export class EgyptPage {
  brNews;
  x;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  this.dataProvider.getEgyptianBrNews().subscribe((news)=>{
  //  let x=JSON.stringify(news);
  //  console.log(x);
   this.brNews=news;
   this.x=this.brNews.articles;
console.log(this.x);
  //  JSON.parse(x);
    // console.log(this.brNews);
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EgyptPage');
  }
  onTech(){
    this.navCtrl.push(EgTechPage);
  }
  onSci(){
    this.navCtrl.push(EgSciPage);
  }
  onEnt(){
    this.navCtrl.push(EgEnterPage);
  }
  onSports(){
    this.navCtrl.push(EgSportsPage);
  }
  onBus(){
    this.navCtrl.push(EgBusinessPage);
  }
  onHealth(){
    this.navCtrl.push(EgHealthPage);
  }
  

}
