import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from "../funcionarios.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CargosService} from "../cargos.service";
import {PessoasService} from "../pessoas.service";
import {FuncoesService} from "../funcoes.service";


@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
  pessoas = null;
  tipo = null;
  cargos = null;
  funcoes = null;
  id = null;
  funcionarios = null;
  editar_ok = null;
  editar_erro = false;

  
  constructor(private pessoasService: PessoasService,
              private funcionariosService: FuncionariosService,
              private cargosService: CargosService,
              private funcoesService: FuncoesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.funcionarios = this.funcionariosService.getFuncionario(this.id);

    this.cargosService.getCargos()
    .subscribe(cargos => this.cargos = cargos);

    this.funcoesService.getFuncoes()
    .subscribe(funcoes => this.funcoes = funcoes);

    this.pessoasService.getPessoas()
    .subscribe(pessoas => this.pessoas = pessoas);
  }

  editar() {
    this.funcionariosService.editFuncionario(this.id, parseInt(this.pessoas), this.tipo, parseInt(this.cargos), this.funcoes)
      .subscribe(pessoa => {
        this.editar_ok = true;
        this.editar_erro = false;
      },
      erro => {
        this.editar_ok = false;
        this.editar_erro = true;
      });
  }

}
