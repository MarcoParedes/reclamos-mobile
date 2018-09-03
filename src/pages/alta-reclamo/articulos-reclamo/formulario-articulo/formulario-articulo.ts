import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TipoReclamo } from "../../../../models/TipoReclamo";
import { TiporeclamoProvider } from "../../../../providers/tiporeclamo/tiporeclamo";
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-formulario-articulo',
  templateUrl: 'formulario-articulo.html',
})
export class FormularioArticuloPage {

  private tipoReclamoList: Array<TipoReclamo>;
  private image: string = 'assets/imgs/no-image.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private camera: Camera,
    private tipoReclamoProvider: TiporeclamoProvider) {
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

  private dismiss() {
    this.viewCtrl.dismiss();
  }

}
