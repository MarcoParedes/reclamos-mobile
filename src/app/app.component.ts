import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { AdmReclamosPage } from "../pages/adm-reclamos/adm-reclamos";
// import { AltaReclamoPage } from "../pages/alta-reclamo/alta-reclamo";
import { CentroCostoPage } from "../pages/alta-reclamo/centro-costo/centro-costo";
import { ReportesPdPage } from "../pages/reportes-pd/reportes-pd";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', icon: 'home', component: HomePage },
      { title: 'ADM Reclamos', icon: 'list', component: AdmReclamosPage },
      { title: 'Alta Reclamo', icon: 'document', component: CentroCostoPage },
      { title: 'Reportes', icon: 'pie', component: ReportesPdPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
