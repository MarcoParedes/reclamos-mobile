import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { TransferenciasPage } from "./transferencias/transferencias";
import { ArticulosTransferenciaPage } from "./articulos-transferencia/articulos-transferencia";
import { Articulo } from "../../models/articulo";
import { ArticulosReclamoPage } from "./articulos-reclamo/articulos-reclamo";
import { Transferencia } from '../../models/transferencia';
import { ReclamoDetalle } from '../../models/reclamoDetalle';


@IonicPage()
@Component({
  selector: 'page-alta-reclamo',
  templateUrl: 'alta-reclamo.html',
})
export class AltaReclamoPage {

  private transferenciaDesc: string;
  private scanning: string;

  private transferencia: Transferencia;

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController) {
      this.transferencia = new Transferencia();
  }

  private openTransferencia(): void {
    let profileModal = this.modalCtrl.create(TransferenciasPage);
    profileModal.onDidDismiss(data => {
      if (data !== undefined) {
        this.transferencia = data;
        this.transferenciaDesc = this.transferencia.transferenciaDesc;
      }
    });
    profileModal.present();
  }

  private openArticulos(): void {

    if (this.transferencia != null) {
      if (this.transferencia.transferenciaDesc != '' 
        || this.transferencia.transferenciaDesc != null) {
        

          let articulosModal = this.modalCtrl.create(ArticulosTransferenciaPage, 
            { articulos: this.transferencia.articulos });
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
  }

  private openMultiplesArticulos(items: Array<Articulo>) {
    let detalleReclamoList = new Array<ReclamoDetalle>();
    items.forEach(x=> {
      let detalle = new ReclamoDetalle();
      detalle.articulo = x;
      detalleReclamoList.push(detalle);
    });
    this.navCtrl.push(ArticulosReclamoPage, { detalleReclamoList: detalleReclamoList });
  }

}
