import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the WdTechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wd-tech',
  templateUrl: 'wd-tech.html',
})
export class WdTechPage {

  techNews;
  x;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
      this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=cda2800c76d649bd8f9ba26eb67a48b2').subscribe(news=>{
        this.techNews=news; this.x=this.techNews.articles;
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WdTechPage');
  }

}
