import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {}

  /*
  *  La propiedad "rol" de un botón puede ser "destructive" o "cancel".
  *  Los botones sin una propiedad de función tendrán el aspecto predeterminado de la plataforma.
  *  Los botones con la función cancel siempre se cargarán como el botón inferior, no importa dónde estén en la matriz.
  *  Todos los demás botones se mostrarán en el orden en que se han agregado a la matriz de botones.
  *  Nota: Recomendamos que los botones destructivos sean siempre el primer botón de la matriz,
  *  ubincando el botón en la parte superior.
  *  Cuando descarta ActionShhet tocando el fondo de la pantalla,
  *  se activara el controlador del botón con la función de cancelación.
  * */

  revealActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modificar alguna opción',
      buttons: [
        {
          text: 'Destructivo',
          role: 'destructive',
          handler: () => {
            console.log('Click en Destructive');
          }
        },
        {
          text: 'Alguna una opción',
          handler: () => {
            console.log('Alguna una opción');
          }
        },
        {
          text: 'Alguna otra opción',
          handler: () => {
            console.log('Alguna otra opción');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
