import { Injectable } from '@angular/core';
import {Funcionario} from './funcionario.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FuncionariosService {

  API_URL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {
  }
  
  getFuncionarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/funcionarios');
  }
  
  getFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.API_URL + '/funcionarios/' + id);
  }
  
  addFuncionario(pessoaId: number, tipo: String, cargoId: number, funcaoId: Array<number>): Observable<any> {
    const funcionario = {'pessoaId': pessoaId, 'tipo': tipo, 'cargoId': cargoId, 'fucaoId': funcaoId};
    return this.http.post(this.API_URL + '/funcionarios', funcionario);
  }
  
  editFuncionario(id: number, pessoaId: number, tipo: String, cargoId: number, funcaoId: Array<number>): Observable<any> {
    const funcionario = {'pessoaId': pessoaId, 'tipo': String, 'cargoId': cargoId, 'fucaoId': funcaoId};
    return this.http.patch(this.API_URL + '/funcionarios/' + id, funcionario);
  }
  
  delFuncionario(id: number) {
     return this.http.delete(this.API_URL + '/funcionarios/' + id);
  }

}
