import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from "../professores.service";
import {DisciplinasService} from "../disciplinas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
})
export class EditarProfessorComponent implements OnInit {
  nome = null;
  id = null;
  disciplinas = null;
  editar_ok = null;
  editar_erro = false;

  constructor(private professoresService: ProfessoresService,
              private disciplinasService: DisciplinasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.professoresService.getProfessor(this.id)
    .subscribe(professor => this.nome = professor.nome);

    this.disciplinasService.getDisciplinas()
    .subscribe(disciplinas => this.disciplinas = disciplinas);
  }

  editar() {
    this.professoresService.editProfessor(this.id , this.nome, parseInt(this.disciplinas))
    .subscribe(professor => {
        this.editar_ok = true;
        this.editar_erro = false;
      },
      erro => {
        this.editar_ok = false;
        this.editar_erro = true;
      });
  }

}
