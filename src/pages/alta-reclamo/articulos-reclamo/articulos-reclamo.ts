import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Articulo } from "../../../models/articulo";
import { FormularioArticuloPage } from "./formulario-articulo/formulario-articulo";

@IonicPage()
@Component({
  selector: 'page-articulos-reclamo',
  templateUrl: 'articulos-reclamo.html',
})
export class ArticulosReclamoPage {

  private articulos: Array<Articulo>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      this.articulos = navParams.data.articulos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosReclamoPage');
  }

  private showPrompt(item: Articulo): void {

    let formModal = this.modalCtrl.create(FormularioArticuloPage, 
      { articulo: item });

    formModal.onDidDismiss(data => {
        console.log(data);
      });
    formModal.present();
  }

}
