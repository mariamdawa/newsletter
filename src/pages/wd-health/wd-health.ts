import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
/**
 * Generated class for the WdHealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wd-health',
  templateUrl: 'wd-health.html',
})
export class WdHealthPage {
  healNews;
  x;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
      this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=cda2800c76d649bd8f9ba26eb67a48b2').subscribe(news=>{
        this.healNews=news; this.x=this.healNews.articles;
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WdHealthPage');
  }

}
