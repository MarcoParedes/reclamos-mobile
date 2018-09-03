import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AltaReclamoPage } from "../alta-reclamo";

@IonicPage()
@Component({
  selector: 'page-centro-costo',
  templateUrl: 'centro-costo.html',
})
export class CentroCostoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private NuevoReclamo() {
    this.navCtrl.push(AltaReclamoPage);
  }

}
