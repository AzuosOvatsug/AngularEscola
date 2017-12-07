import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionario } from '../funcionario.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionario: Funcionario;

  constructor(private funcionariosService: FuncionariosService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.funcionariosService.getFuncionario(id)
      .subscribe(funcionario => this.funcionario = funcionario,
      erro => this.router.navigate(['funcionario-nao-encontrado']));
  }

}
