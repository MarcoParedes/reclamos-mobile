import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { Transferencia } from "../../../models/transferencia";
import { Articulo } from "../../../models/articulo";

@IonicPage()
@Component({
  selector: 'page-transferencias',
  templateUrl: 'transferencias.html',
})
export class TransferenciasPage {

  items: Array<Transferencia>;
  icons: string[];

  constructor(private storage: Storage,
      private viewCtrl: ViewController) {

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 10; i++) {
      let item = new Transferencia();
      item.fechaGeneracion = new Date();
      item.transferenciaDesc= '168' + i + '-0002812' + i;
      item.cc= '2 Talcahuano';

      for(let x = 1; x < 26; x++) {
        let articulo = new Articulo();
        articulo.selected = false;
        articulo.cantidad = x * 2;
        articulo.descripcion = "artiticlo sdkjskjd jsdskds ahags" + x;
        articulo.id = x;
        articulo.scanning = "745964840" + x;
        articulo.uxb = 3 * x;
        articulo.unidades = x + 5;
        item.articulos.push(articulo);
      }
      this.items.push(item);
    }

    this.storage.set('transferencias', this.items);
    // localStorage.setItem("transferencias", JSON.stringify(this.items));

  }

  private Seleccionar(event: any, item: Transferencia) {
    this.viewCtrl.dismiss(item.transferenciaDesc);
  }

  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
