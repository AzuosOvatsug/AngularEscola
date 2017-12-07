import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {TurmaComponent} from './turma/turma.component';
import {DisciplinasService} from './disciplinas.service';
import {TurmasService} from './turmas.service';
import {PessoasService} from './pessoas.service';
import {ProfessoresService} from './professores.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ProfessorComponent } from './professor/professor.component';
import { ListaDeProfessoresComponent } from './lista-de-professores/lista-de-professores.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';
import { ListaDeFuncionariosComponent } from '../admin/lista-de-funcionarios/lista-de-funcionarios.component';
import { FuncionarioComponent } from '../admin/funcionario/funcionario.component';
import { CadastroFuncionarioComponent } from '../admin/cadastro-funcionario/cadastro-funcionario.component';
import { EditarFuncionarioComponent } from '../admin/editar-funcionario/editar-funcionario.component';
import { FuncionariosService } from '../admin/funcionarios.service';
import { CargosService } from '../admin/cargos.service';
import { FuncoesService } from '../admin/funcoes.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    AdminComponent,
    CadastroDeDisciplinaComponent,
    CadastroDeTurmaComponent,
    DisciplinaComponent,
    ListaDeDisciplinasComponent,
    ListaDeTurmasComponent,
    TurmaComponent,
    PaginaNaoEncontradaComponent,
    PessoaComponent,
    ListaDePessoasComponent,
    CadastroPessoaComponent,
    EditarPessoaComponent,
    ProfessorComponent,
    ListaDeProfessoresComponent,
    CadastroProfessorComponent,
    EditarProfessorComponent,
    ListaDeFuncionariosComponent,
    FuncionarioComponent,
    CadastroFuncionarioComponent,
    EditarFuncionarioComponent
  ],
  providers: [
    DisciplinasService,
    TurmasService,
    PessoasService,
    ProfessoresService,
    FuncionariosService,
    CargosService,
    FuncoesService
  ]
})
export class AdminModule {
}
