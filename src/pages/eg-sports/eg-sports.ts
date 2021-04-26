import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the EgSportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eg-sports',
  templateUrl: 'eg-sports.html',
})
export class EgSportsPage {
  sporNews;
  x;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
      this.http.get('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=cda2800c76d649bd8f9ba26eb67a48b2').subscribe(news=>{
        this.sporNews=news; this.x=this.sporNews.articles;
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EgSportsPage');
  }

}
