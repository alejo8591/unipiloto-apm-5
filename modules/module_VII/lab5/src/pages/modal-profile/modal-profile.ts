import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-profile',
  templateUrl: 'modal-profile.html'
})
export class ModalProfilePage {

  constructor(public viewCtrl: ViewController) {
  }

  /*
  * La clase ViewController tiene varios metodos que tienen interacción
  * con el componente activo
  * */
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
