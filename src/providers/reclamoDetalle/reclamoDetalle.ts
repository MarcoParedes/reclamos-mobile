import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ReclamoDetalle } from '../../models/reclamoDetalle';

@Injectable()
export class ReclamoDetalleProvider {

  constructor(public http: HttpClient) {
    
  }

  public getReclamoDetalle(): Observable<ReclamoDetalle[]> {
    return this.http
      .get('assets/data/reclamoDetalle.json')
      .map(res => {
         return res["reclamoDetalle"].map((data) => data);
      });
  }

}
