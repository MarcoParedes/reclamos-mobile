import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reportes-pd',
  templateUrl: 'reportes-pd.html',
})
export class ReportesPdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private pieChartLabels: string[] = ['Mercadería Vencida', 'Faltante de Mercadería', 
    'Rotura', 'Problemas de Temperatura', 'Sobrante UL - Tranf Compl', 'Diferencia UxB'];
  private pieChartData: number[] = [25, 40, 5, 12, 19, 32];
  private pieChartType: string = 'pie';

  private background = [
    {
      backgroundColor: [
        'rgb(67,67,72)',
        'rgb(144,237,125)',
        'rgb(142, 58, 58)',
        'rgb(247,163,92)',
        'rgb(124, 181, 236)',
        'rgb(244,91,91)'
      ]
    }
  ];

  private pieOptions:any = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

}
