import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { TransferenciaProvider } from '../../../providers/transferencia/transferencia';

import { Transferencia } from "../../../models/transferencia";

@IonicPage()
@Component({
  selector: 'page-transferencias',
  templateUrl: 'transferencias.html',
})
export class TransferenciasPage {

  transferenciasList: Array<Transferencia>;
  icons: string[];

  constructor(private storage: Storage,
      private viewCtrl: ViewController,
      private transferenciaProvider: TransferenciaProvider) {

        this.getTransferencias();
  }

  private getTransferencias(): void {
    this.transferenciaProvider.getTransferencias()
      .subscribe(data => {
        this.transferenciasList = data;
      });
  }

  private Seleccionar(event: any, item: Transferencia) {
    this.viewCtrl.dismiss(item);
  }

  private getItems(ev: any): void {

  }

  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
