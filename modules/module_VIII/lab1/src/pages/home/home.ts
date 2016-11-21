import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Network } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public network: string;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    Network.onConnect().subscribe(() => {
      this.network = Network.connection;
      setTimeout(() => {
        if (Network.connection === 'wifi') {
          console.log(Network.connection);
        }
      }, 3000);
    });
  }

}
