import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-posting',
  templateUrl: 'posting.html',
})
export class PostingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostingPage');
  }

  ok(){

  }

  cancel(){
    
  }

}
