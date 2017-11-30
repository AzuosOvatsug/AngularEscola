import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from "../professores.service";
import {DisciplinasService} from "../disciplinas.service";

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {
  nome = null;
  disciplinas = null;
  cadastro_ok = null;
  cadastro_erro = false;

  constructor(private professoresService: ProfessoresService,
              private disciplinasService: DisciplinasService ) { }

  ngOnInit() {
    this.disciplinasService.getDisciplinas()
    .subscribe(disciplinas => this.disciplinas = disciplinas);
  }

  salvar() {
    this.professoresService.addProfessor(this.nome, parseInt(this.disciplinas))
    .subscribe(professor => {
        this.limpar();
        this.cadastro_ok = true;
        this.cadastro_erro = false;
      },
      erro => {
        this.cadastro_erro = true;
        this.cadastro_ok = false;
      }
    );
  }
  limpar() {
    this.nome = null;
    this.disciplinas = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }

}
