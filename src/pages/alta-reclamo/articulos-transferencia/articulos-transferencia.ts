import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { Transferencia } from "../../../models/transferencia";
import { Articulo } from "../../../models/articulo";

@IonicPage()
@Component({
  selector: 'page-articulos-transferencia',
  templateUrl: 'articulos-transferencia.html',
})
export class ArticulosTransferenciaPage {

  private transferencias: Array<Transferencia>;
  private articulos: Array<Articulo>;
  private nroTransferencia: string;
  
  constructor(private storage: Storage, private navCtrl: NavController,
    private viewCtrl: ViewController) {
      this.nroTransferencia = viewCtrl.data.nroTransferencia;
      this.ObtenerTransferencias();
  }

  private ObtenerTransferencias() {
    // this.transferencias = JSON.parse(localStorage.getItem("transferencias"));
    this.storage.get('transferencias')
      .then(data => {
        this.transferencias = data;
        this.obtenerArticulos();
      });
  }

  private obtenerArticulos() {
    this.articulos =  this.transferencias
                        .filter(x => x.transferenciaDesc == this.nroTransferencia)[0].articulos;
  }

  private Seleccionar() {
    let items = this.articulos.filter(x => x.selected);
    this.viewCtrl.dismiss(items);
    // let count = items.length;
    // if (count > 1) {
    //   //this.viewCtrl.dismiss(items);
    // } else {
    //   //this.viewCtrl.dismiss(items);
    // }
  }

  private getItems($event): void {
    console.log($event);
  }

  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
