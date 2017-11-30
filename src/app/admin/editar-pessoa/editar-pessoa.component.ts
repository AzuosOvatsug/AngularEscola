import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TurmasService} from "../turmas.service";

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  nome = null;
  turmas = null;
  id = null;
  editar_ok = null;
  editar_erro = false;

  constructor(private pessoasService: PessoasService,
              private turmasService: TurmasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pessoasService.getPessoa(this.id)
    .subscribe(pessoa => this.nome = pessoa.nome);

    this.turmasService.getTurmas()
    .subscribe(turmas => this.turmas = turmas);
  }

  editar() {
    this.pessoasService.editPessoa(this.id, this.nome, parseInt(this.turmas))
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
