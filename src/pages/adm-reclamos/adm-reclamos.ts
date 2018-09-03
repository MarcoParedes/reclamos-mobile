import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Reclamo } from "../../models/reclamo";
import { ReclamoDetallePage } from "../reclamo-detalle/reclamo-detalle";
import { CentroCostoPage } from "../alta-reclamo/centro-costo/centro-costo";
import { FiltroReclamoPage } from "./filtro-reclamo/filtro-reclamo";

@IonicPage()
@Component({
  selector: 'page-adm-reclamos',
  templateUrl: 'adm-reclamos.html',
})
export class AdmReclamosPage {

  reclamosList: Array<Reclamo>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {
  
    this.reclamosList = [];
    for (let i = 1; i < 18; i++) {
      let item = new Reclamo();
      item.idb = 9217;
      item.prefijo = ('000' + ("3" + i)).slice(-4);
      item.nroTransferencia = ('0000000' + ("6464" + i)).slice(-8);
      item.tipoReclamo.descripcion = (i % 2) == 0 ? 'Faltante de Mercadería' : 'Rotura';
      item.nroReclamo = '000000' + i;
      item.cc = '2 Talcahuano';
      item.fechaGeneracion = new Date();
      item.estado = "Analizado";
      item.bgColor = (i == 2 || i == 5 || i == 9) ? 'warning' : (i % 2) == 0 ? 'danger' : 'success';
      item.icono = (i == 2 || i == 5 || i == 9) ? 'warning' : (i % 2) == 0 ? 'close-circle' : 'checkbox';
      this.reclamosList.push(item);
    }

  }

  private GetDetalle(): void {
    this.navCtrl.push(ReclamoDetallePage);
  }

  private NuevoReclamo(): void {
    
  }

  private MostrarFiltros(): void {
    let filtroModal = this.modalCtrl.create(FiltroReclamoPage);
    filtroModal.onDidDismiss(data => {
      if (data !== undefined) {
        
      }
    });
    filtroModal.present();
  }

}
