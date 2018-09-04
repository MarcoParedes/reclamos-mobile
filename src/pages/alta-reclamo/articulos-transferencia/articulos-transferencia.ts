import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { Transferencia } from "../../../models/transferencia";
import { Articulo } from "../../../models/articulo";

@IonicPage()
@Component({
  selector: 'page-articulos-transferencia',
  templateUrl: 'articulos-transferencia.html',
})
export class ArticulosTransferenciaPage {

  private articulos: Array<Articulo>;
  private nroTransferencia: string;
  
  constructor(private storage: Storage, private navCtrl: NavController,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController) {
      this.articulos = viewCtrl.data.articulos;
      if (this.articulos != null) {
        this.articulos.map(x => x.selected = false);
      }
  }


  private Seleccionar() {
    let items = this.articulos.filter(x => x.selected);
    if (items.length > 0) {
      this.viewCtrl.dismiss(items); 
    }else {
      this.showAlert('Advertencia', 'Debe seleccionar al menos un artículo.');
    }
  }

  private showAlert(title: string, message: string): void {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  private getItems(ev: any): void {
    
    // // set val to the value of the searchbar
    // const val = ev.target.value;

    // console.log(val);

    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.articulos = this.articulos.filter((item) => {
    //     console.log(item);
    //     return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }

  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
