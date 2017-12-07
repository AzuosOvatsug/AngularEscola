import { Injectable } from '@angular/core';
import {Cargo} from './cargo.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CargosService {
  
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getCargos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/cargos');
  }

  getCargo(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(this.API_URL + '/cargos/' + id);
  }

}
