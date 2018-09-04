import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ChartsModule } from 'ng2-charts';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Camera } from '@ionic-native/camera';
import { CalendarModule } from "ion2-calendar";

import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CentroCostoPage } from "../pages/alta-reclamo/centro-costo/centro-costo";
import { TransferenciasPage } from "../pages/alta-reclamo/transferencias/transferencias";
import { AltaReclamoPage } from "../pages/alta-reclamo/alta-reclamo";
import { ReportesPdPage } from "../pages/reportes-pd/reportes-pd";
import { ArticulosTransferenciaPage } from "../pages/alta-reclamo/articulos-transferencia/articulos-transferencia";
import { AdmReclamosPage  } from "../pages/adm-reclamos/adm-reclamos";
import { ReclamoDetallePage } from "../pages/reclamo-detalle/reclamo-detalle";
import { ArticulosReclamoPage } from "../pages/alta-reclamo/articulos-reclamo/articulos-reclamo";
import { FormularioArticuloPage } from "../pages/alta-reclamo/articulos-reclamo/formulario-articulo/formulario-articulo";
import { FiltroReclamoPage } from "../pages/adm-reclamos/filtro-reclamo/filtro-reclamo";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TiporeclamoProvider } from '../providers/tiporeclamo/tiporeclamo';
import { TransferenciaProvider } from '../providers/transferencia/transferencia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TransferenciasPage,
    AltaReclamoPage,
    ReportesPdPage,
    ArticulosTransferenciaPage,
    FormularioArticuloPage,
    ArticulosReclamoPage,
    CentroCostoPage,
    AdmReclamosPage,
    ReclamoDetallePage,
    FiltroReclamoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    CalendarModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransferenciasPage,
    AltaReclamoPage,
    ReportesPdPage,
    ArticulosTransferenciaPage,
    FormularioArticuloPage,
    ArticulosReclamoPage,
    CentroCostoPage,
    AdmReclamosPage,
    ReclamoDetallePage,
    FiltroReclamoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TiporeclamoProvider,
    Camera,
    TransferenciaProvider
  ]
})
export class AppModule {}
