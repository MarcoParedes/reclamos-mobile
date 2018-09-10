import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Reclamo } from '../../models/reclamo';

@Injectable()
export class ReclamoProvider {

  constructor(public http: HttpClient) {
    
  }

  public getReclamos(): Observable<Reclamo[]> {
    return this.http
      .get('assets/data/reclamos.json')
      .map(res => {
         return res["reclamos"].map((data) => data);
      });
  }

}
