import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReclamoDetallePage } from './reclamo-detalle';

@NgModule({
  declarations: [
    ReclamoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ReclamoDetallePage),
  ],
})
export class ReclamoDetallePageModule {}
