import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { TransferenciasPage } from "./transferencias/transferencias";
import { ArticulosTransferenciaPage } from "./articulos-transferencia/articulos-transferencia";
import { Articulo } from "../../models/articulo";
import { ArticulosReclamoPage } from "./articulos-reclamo/articulos-reclamo";


@IonicPage()
@Component({
  selector: 'page-alta-reclamo',
  templateUrl: 'alta-reclamo.html',
})
export class AltaReclamoPage {

  private transferenciaDesc: string;
  private scanning: string;

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController) {
  }

  private openTransferencia(): void {
    let profileModal = this.modalCtrl.create(TransferenciasPage);
    profileModal.onDidDismiss(data => {
      if (data !== undefined) {
        this.transferenciaDesc = data;
      }
    });
    profileModal.present();
  }

  private openArticulos(): void {
    if (this.transferenciaDesc != '' && this.transferenciaDesc != undefined) {
      let articulosModal = this.modalCtrl.create(ArticulosTransferenciaPage, { nroTransferencia: this.transferenciaDesc });
      articulosModal.onDidDismiss(data => {
        if (data != undefined) {
          if (data.length > 1) {
            this.openMultiplesArticulos(data);
          }else {
            this.scanning = data[0].scanning;
          }
        }
      });
      articulosModal.present(); 
    }
  }

  private openMultiplesArticulos(items: Array<Articulo>) {
    this.navCtrl.push(ArticulosReclamoPage, { articulos: items });
  }

}
