import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Reclamo } from "../../models/reclamo";
import { ReclamoDetallePage } from "../reclamo-detalle/reclamo-detalle";
import { FiltroReclamoPage } from "./filtro-reclamo/filtro-reclamo";
import { ReclamoProvider } from '../../providers/reclamo/reclamo';

@IonicPage()
@Component({
  selector: 'page-adm-reclamos',
  templateUrl: 'adm-reclamos.html',
  providers: [ReclamoProvider]
})
export class AdmReclamosPage {

  reclamosList: Array<Reclamo>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public reclamoProvider: ReclamoProvider) {

    this.GetReclamos();

  }


  public GetReclamos(): void {
    this.reclamoProvider.getReclamos()
      .subscribe(data => {
        data.map((item) => {
          let num = parseInt(item.nroReclamo);
          item.bgColor = (num == 2 || num == 5 || num == 9 || num == 54) ? 'warning' : (num % 2) == 0 ? 'danger' : 'success';
          item.icono = (num == 2 || num == 5 || num == 9 || num == 54) ? 'warning' : (num % 2) == 0 ? 'close-circle' : 'checkbox';
          item.prefijo = ('000' + (item.prefijo)).slice(-4);
          item.nroTransferencia = ('0000000' + (item.nroTransferencia)).slice(-8);
          item.nroReclamo = ('00000000' + (item.nroReclamo)).slice(-9);
        })
        this.reclamosList = data;
      });
  }

  public GetDetalle(): void {
    this.navCtrl.push(ReclamoDetallePage);
  }

  public NuevoReclamo(): void {
    
  }

  public MostrarFiltros(): void {
    let filtroModal = this.modalCtrl.create(FiltroReclamoPage);
    filtroModal.onDidDismiss(data => {
      if (data !== undefined) {
        
      }
    });
    filtroModal.present();
  }

}
