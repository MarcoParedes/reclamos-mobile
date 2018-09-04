import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';
import { Articulo } from "../../../models/articulo";
import { FormularioArticuloPage } from "./formulario-articulo/formulario-articulo";
import { ReclamoDetalle } from '../../../models/reclamoDetalle';

@IonicPage()
@Component({
  selector: 'page-articulos-reclamo',
  templateUrl: 'articulos-reclamo.html',
})
export class ArticulosReclamoPage {

  // private articulos: Array<Articulo>;
  private detalleReclamoList: ReclamoDetalle[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      // this.articulos = navParams.data.articulos;
      this.detalleReclamoList = navParams.data.detalleReclamoList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosReclamoPage');
  }

  private showPrompt(item: ReclamoDetalle): void {
    let formModal = this.modalCtrl.create(FormularioArticuloPage, 
      { detalle: item });

    formModal.onDidDismiss(data => {
        item = data;
      });
    formModal.present();
  }

  private QuitarArticulo(item: ReclamoDetalle): void {
    let index = this.detalleReclamoList.indexOf(item);
    this.detalleReclamoList.splice(index, 1);
  }

}
