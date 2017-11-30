import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProfessoresService} from '../professores.service';
import {Professor} from '../professor.model';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  professor;
  
    constructor(private professoresService: ProfessoresService,
                private route: ActivatedRoute,
                private router: Router) { }
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.professoresService.getProfessor(id)
        .subscribe(professor => this.professor = professor,
          erro => this.router.navigate(['turma-nao-encontrada']));
    }
  
  }
