import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { ReclamoDetalle } from "../../models/reclamoDetalle";
import { ImageViewerController } from "ionic-img-viewer";
import { ReclamoDetalleProvider } from '../../providers/reclamoDetalle/reclamoDetalle';
import { TiporeclamoProvider } from '../../providers/tiporeclamo/tiporeclamo';

@IonicPage()
@Component({
  selector: 'page-reclamo-detalle',
  templateUrl: 'reclamo-detalle.html',
  providers: [ReclamoDetalleProvider, TiporeclamoProvider]
})
export class ReclamoDetallePage {

  public detalleReclamoList: Array<ReclamoDetalle>;
  public segmento: string;

  public imageFormat = ['png', 'jpg', 'gif', 'jpeg', 'ico', 'bmp', 'psd', 'ai', 'cdr', 'dwg', 'svg', 'raw', 'nef'];

  public imagenes: Array<{ articulo: string, ruta: string, imagen: boolean, fileName: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public imageViewerCtrl: ImageViewerController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public reclamoDetalleProvider: ReclamoDetalleProvider,
    public tiporeclamoProvider: TiporeclamoProvider) {

      this.detalleReclamoList = new Array<ReclamoDetalle>();
      this.imagenes = [];
      this.segmento = "articulos";
      this.GetDetalleReclamo();
  }

  public GetDetalleReclamo(): void {
    const loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();

    this.reclamoDetalleProvider.getReclamoDetalle()
      .subscribe(data => {
        data.map((item) => {
          item.prefijo = ('000' + item.prefijo).slice(-4);
          item.nroTransferencia = ('0000000' + item.nroTransferencia).slice(-8);
          let idArticulo = item.articulo.idArticulo;
          let idSector = parseInt(idArticulo.substring(0, 1));
          let idSeccion = parseInt(idArticulo.substring(1, 2));
          let idGranFlia = (idSector == 2 && idSeccion == 3) ? parseInt(idArticulo.substring(2, 3)) : 0;


          this.detalleReclamoList.push(item);

          if (item.imagen != null) {
            if (this.isImage(item.imagen)) {
                this.imagenes.push({ articulo: item.articulo.descripcion, ruta: "data:image/png;base64," + item.rutaImagen, imagen: true, fileName: item.imagen });
            } else {
                this.imagenes.push({ articulo: item.articulo.descripcion, ruta: '', imagen: false, fileName: item.imagen });
            }
        }

        });
      });

    setTimeout(() => {
      loader.dismiss();
    }, 2000);

  }

  public presentActionSheet(item: ReclamoDetalle): void {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Administrar Reclamo',
      buttons: [
        {
          text: 'Aprobar',
          icon: 'heart',
          cssClass: 'text-success',
          handler: () => {
            item.estado = 'Aprobado';
            this.presentToast("Aprobado");
          }
        }, {
          text: 'Rechazar',
          icon: 'sad',
          cssClass: 'text-warning',
          handler: () => {
            item.estado = 'Rechazado';
            this.presentToast("Rechazado");
          }
        },
        {
          text: 'Derivar',
          icon: 'send',
          cssClass: 'text-info',
          handler: () => {
            this.showPrompt(item);
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

  public presentToast(message): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  public showPrompt(item: ReclamoDetalle): void {
    const prompt = this.alertCtrl.create({
      title: 'Derivar',
      inputs: [
        {
          label: 'Rotura',
          type: 'radio',
          checked: true,
          value: 'Rotura'
        },
        {
          label: 'Mercadería Vencida',
          type: 'radio',
          checked: false,
          value: 'Mercadería Vencida'
        },
        {
          label: 'Sobrante UL - Tranf Compl',
          type: 'radio',
          checked: false,
          value: 'Sobrante UL - Tranf Compl'
        },
        {
          label: 'Calidad',
          type: 'radio',
          checked: false,
          value: 'Calidad'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            let index = this.detalleReclamoList.indexOf(item);
            this.detalleReclamoList.splice(index, 1);
            this.presentToast("Artículo derivado correctamente");
          }
        }
      ]
    });
    prompt.present();
  }

  public itemSelected(imageToView): void {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  public isNull(value: any): boolean {
      if (value != null && value != "" && value != -1 && typeof value != 'undefined') {
          return false;
      }
      return true;
  }

  public isImage(fileName): boolean {
      let ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
      let format = this.imageFormat.filter(x => x.toLowerCase() == ext)[0];
      return !this.isNull(format);
  }

}
