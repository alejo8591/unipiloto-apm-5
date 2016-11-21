import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(private alertCtrl: AlertController) {
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Alerta básica',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Alert Confirm',
      message: 'Alerta con opciones',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Click en aceptar');
          }
        }
      ]
    });
    alert.present();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Alert con Prompt',
      inputs: [
        {
          name: 'Usuario',
          placeholder: 'Cedula'
        },
        {
          name: 'Contraseña',
          placeholder: 'Contraseña',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Click en Cancelar');
          }
        },
        {
          text: 'Ingresar',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }
}

