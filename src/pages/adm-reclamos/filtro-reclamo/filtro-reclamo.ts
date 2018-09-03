import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { TipoReclamo } from "../../../models/TipoReclamo";
import { TiporeclamoProvider } from "../../../providers/tiporeclamo/tiporeclamo";
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, CalendarResult } from "ion2-calendar";

@IonicPage()
@Component({
  selector: 'page-filtro-reclamo',
  templateUrl: 'filtro-reclamo.html',
})
export class FiltroReclamoPage {

  private tipoReclamoList: Array<TipoReclamo>;
  private fecha: string = 'Fecha Inicio - Fecha Fin';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private tipoReclamoProvider: TiporeclamoProvider) {
  }

  ionViewDidLoad() {
    this.GetTipoReclamo();
  }

  private GetTipoReclamo(): void {
    this.tipoReclamoProvider.getTipoReclamo()
      .subscribe(data => {
        this.tipoReclamoList = data;
      });
  }

  openCalendar() {
    // const options: CalendarModalOptions = {
    //   pickMode: 'range',
    //   title: 'RANGE',
    //   weekdays: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
    // };

    const options: CalendarComponentOptions = {
      pickMode: 'range',
      monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
      weekdays: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      color: 'dark'
    }


    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
      if (date != null) {
        let fDesde = date.from;
        let fHasta = date.to;
        this.fecha = fDesde.string + ' - ' + fHasta.string;
      }
    });
  }


  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
