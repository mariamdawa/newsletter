import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the EgBusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eg-business',
  templateUrl: 'eg-business.html',
})
export class EgBusinessPage {
busNews;
x;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.http.get('https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=cda2800c76d649bd8f9ba26eb67a48b2').subscribe(news=>{
      this.busNews=news; this.x=this.busNews.articles;
    })
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EgBusinessPage');
  }

}
