import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { TipoReclamo } from "../../../../models/TipoReclamo";
import { TiporeclamoProvider } from "../../../../providers/tiporeclamo/tiporeclamo";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ReclamoDetalle } from '../../../../models/reclamoDetalle';

@IonicPage()
@Component({
  selector: 'page-formulario-articulo',
  templateUrl: 'formulario-articulo.html',
})
export class FormularioArticuloPage {

  private detalle: ReclamoDetalle;
  private tipoReclamoList: Array<TipoReclamo>;
  private idTipoReclamo: number;
  private image: string = 'assets/imgs/no-image.png';
  private cantidad: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private camera: Camera,
    private alertCtrl: AlertController,
    private tipoReclamoProvider: TiporeclamoProvider) {
      this.detalle = navParams.data.detalle;
      this.tipoReclamoList = new Array<TipoReclamo>();
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

  private getPicture(): void {
    const options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      allowEdit: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT
    }

    this.camera.getPicture(options).then((imageData) => {

      this.image = imageData;
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(imageData);
    }, (err) => {
      console.log('Error obtaining picture')
    });
  }

  private getFromLibrary(): void {
    const options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {

      this.image = imageData;
      console.log(imageData);
    }, (err) => {
      console.log('Error obtaining library')
    });
  }

  private Aceptar(): void {
    if (this.idTipoReclamo != 0 && this.cantidad != null) {
      this.detalle.cantidad = this.cantidad;
      this.detalle.tipoReclamo = this.tipoReclamoList.filter(x=> x.idTipoReclamo == this.idTipoReclamo)[0];
      this.viewCtrl.dismiss(this.detalle);
    }else {
      this.showAlert("Advertencia", "Debe llenar todos los campos del formulario.");
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

  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
