import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the WdSportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wd-sports',
  templateUrl: 'wd-sports.html',
})
export class WdSportsPage {

  sportsNews;
  x;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
      this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=cda2800c76d649bd8f9ba26eb67a48b2').subscribe(news=>{
        this.sportsNews=news; this.x=this.sportsNews.articles;
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WdSportsPage');
  }

}
