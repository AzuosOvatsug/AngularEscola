import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {TurmasService} from "../turmas.service";

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {
  nome = null;
  turmas = null;
  cadastro_ok = null;
  cadastro_erro = false;


  constructor(private pessoasService: PessoasService,
              private turmasService: TurmasService) { }

  ngOnInit() {
    this.turmasService.getTurmas()
    .subscribe(turmas => this.turmas = turmas);
  }

  salvar(id: number) {
    this.pessoasService.addPessoa(this.nome , parseInt(this.turmas))
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
    this.nome = null;
    this.turmas = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }

}
