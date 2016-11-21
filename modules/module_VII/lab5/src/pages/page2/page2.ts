import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular'
import {ModalProfilePage} from "../modal-profile/modal-profile";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalProfilePage, { userId: 8675309 });
    profileModal.present();
  }

}
