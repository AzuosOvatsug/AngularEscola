import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {CargosService} from "../cargos.service";
import {FuncoesService} from "../funcoes.service";
import {Funcao} from "../funcao.model";
import {FuncionariosService} from "../funcionarios.service";


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  pessoas = null;
  cargos = null;
  funcoes = null;
  tipo = null;
  cadastro_ok = null;
  cadastro_erro = false;
  
  
  constructor( private pessoasService: PessoasService,
               private cargosService: CargosService,
               private funcoesService: FuncoesService,
               private funcionariosService: FuncionariosService ) { }

  ngOnInit() {
    this.pessoasService.getPessoas()
    .subscribe(pessoas => this.pessoas = pessoas);

    this.cargosService.getCargos()
    .subscribe(cargos => this.cargos = cargos);

    this.funcoesService.getFuncoes()
    .subscribe(funcoes => this.funcoes = funcoes);
  }

  salvar(id: number) {
    this.funcionariosService.addFuncionario( parseInt(this.pessoas), this.tipo, parseInt(this.cargos), this.funcoes)
      .subscribe(pessoa => {
          this.limpar();
          this.cadastro_ok = true;
          this.cadastro_erro = false;
        },
        erro => {
          this.cadastro_ok = false;
          this.cadastro_erro = true;
        });
  }
  limpar() {
    this.pessoas = null;
    this.cargos = null;
    this.funcoes = null;
    this.tipo = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }

}
