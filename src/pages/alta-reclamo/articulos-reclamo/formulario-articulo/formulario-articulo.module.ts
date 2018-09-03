import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioArticuloPage } from './formulario-articulo';

@NgModule({
  declarations: [
    FormularioArticuloPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioArticuloPage),
  ],
})
export class FormularioArticuloPageModule {}
