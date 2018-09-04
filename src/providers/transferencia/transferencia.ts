import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Transferencia } from '../../models/transferencia';

@Injectable()
export class TransferenciaProvider {

  constructor(public http: HttpClient) {
    
  }

  public getTransferencias(): Observable<Transferencia[]> {
    return this.http
      .get('assets/data/transferencias.json')
      .map(res => {
         return res["transferencias"].map((data) => data);
      });
  }

}
