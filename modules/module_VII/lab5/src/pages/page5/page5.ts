import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Page5Page Page');
  }

}
