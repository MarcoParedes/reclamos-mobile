import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { TipoReclamo } from "../../models/TipoReclamo";

@Injectable()
export class TiporeclamoProvider {

  constructor(public http: HttpClient) {
  }

  public getTipoReclamo(): Observable<TipoReclamo[]> {
    return this.http
      .get('assets/data/tiporeclamo.json')
      .map(res => {
         return res["tipoReclamo"].map((data) => data);
      });
  }


  public getTiposReclamoxIdbFamilia(idEmpresa: number, idRegion: number, idb: number, idSector: number, idSeccion: number, idGranFlia: number): Observable<TipoReclamo[]> {
    return this.http
      .get('assets/data/tiporeclamoxFamilia.json')
      .map(res => {
         return res["tipoReclamo"].map((data) => data);
      });
  }

}
