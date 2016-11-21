import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Page3Page Page');
  }

}
