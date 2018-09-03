import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { ReclamoDetalle } from "../../models/reclamoDetalle";
import { ImageViewerController } from "ionic-img-viewer";

@IonicPage()
@Component({
  selector: 'page-reclamo-detalle',
  templateUrl: 'reclamo-detalle.html',
})
export class ReclamoDetallePage {

  private detalleReclamoList: Array<ReclamoDetalle>;
  private segmento: string;

  private imagenes: Array<{ nombre: string, imagen: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private imageViewerCtrl: ImageViewerController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
    this.detalleReclamoList = new Array<ReclamoDetalle>();
    this.imagenes = [];
    this.segmento = "articulos";
    this.GetDetalleReclamo();
  }

  private GetDetalleReclamo(): void {
    const loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();

    for (let index = 0; index < 6; index++) {
      let item = new ReclamoDetalle();
      item.idReclamoDetalle = index;
      item.articulo.descripcion = "galletas saladitas" + index;
      item.cantidad = 5 + index;
      item.uxb = 2;
      item.estado = (index % 2 == 0) ? "Aprobado" :"Pendiente";
      item.color = item.estado == "Pendiente" ? "text-warning" : "text-success";
      item.articulo.idArticulo = "11121212" + index;
      this.detalleReclamoList.push(item);

      if (index < 5) {
        this.imagenes.push({ nombre: item.articulo.descripcion, imagen: (index + 1) +'.jpg' });
      }
    }

    setTimeout(() => {
      loader.dismiss();
    }, 2000);

  }

  private presentActionSheet(): void {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Administrar Reclamo',
      buttons: [
        {
          text: 'Aprobar',
          icon: 'heart',
          cssClass: 'text-success',
          handler: () => {
            this.presentToast("Aprobado");
          }
        }, {
          text: 'Rechazar',
          icon: 'sad',
          cssClass: 'text-warning',
          handler: () => {
            this.presentToast("Rechazado");
          }
        },
        {
          text: 'Derivar',
          icon: 'send',
          cssClass: 'text-info',
          handler: () => {
            this.showPrompt();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  private presentToast(message): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  private showPrompt(): void {
    const prompt = this.alertCtrl.create({
      title: 'Derivar',
      inputs: [
        {
          label: 'Rotura',
          type: 'radio',
          checked: true
        },
        {
          label: 'Faltante de Mercadería',
          type: 'radio',
          checked: false
        },
        {
          label: 'Sobrante UL - Tranf Compl',
          type: 'radio',
          checked: false
        },
        {
          label: 'Calidad',
          type: 'radio',
          checked: false
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  private itemSelected(imageToView): void {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

}
