import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {TurmaComponent} from './turma/turma.component';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {PessoaComponent} from './pessoa/pessoa.component';
import {ListaDePessoasComponent} from './lista-de-pessoas/lista-de-pessoas.component';
import {CadastroPessoaComponent} from './cadastro-pessoa/cadastro-pessoa.component';
import {EditarPessoaComponent} from './editar-pessoa/editar-pessoa.component';
import {ProfessorComponent} from './professor/professor.component';
import {ListaDeProfessoresComponent} from './lista-de-professores/lista-de-professores.component';
import {CadastroProfessorComponent} from './cadastro-professor/cadastro-professor.component';
import {EditarProfessorComponent} from './editar-professor/editar-professor.component';
import {FuncionarioComponent} from './funcionario/funcionario.component';
import {ListaDeFuncionariosComponent} from './lista-de-funcionarios/lista-de-funcionarios.component';
import {CadastroFuncionarioComponent} from './cadastro-funcionario/cadastro-funcionario.component';
import {EditarFuncionarioComponent} from './editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'disciplinas', component: ListaDeDisciplinasComponent},
      {path: 'disciplinas/:id', component: DisciplinaComponent},
      {path: 'disciplinas/:id/novo', component: CadastroDeDisciplinaComponent},
      {path: 'disciplinas/:id/editar', component: CadastroDeDisciplinaComponent},
      {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
      {path: 'turmas', component: ListaDeTurmasComponent},
      {path: 'turmas/:id', component: TurmaComponent},
      {path: 'pessoas', component: ListaDePessoasComponent},
      {path: 'pessoas/:id', component: PessoaComponent},
      {path: 'cadastro-pessoa', component: CadastroPessoaComponent},
      {path: 'pessoas/:id/editar', component: EditarPessoaComponent},
      {path: 'professores', component: ListaDeProfessoresComponent},
      {path: 'professores/:id', component: ProfessorComponent},
      {path: 'cadastro-professor', component: CadastroProfessorComponent},
      {path: 'professores/:id/editar', component: EditarProfessorComponent},
      {path: 'funcionarios', component: ListaDeFuncionariosComponent},
      {path: 'funcionarios/:id', component: FuncionarioComponent},
      {path: 'cadastro-funcionario', component: CadastroFuncionarioComponent},
      {path: 'funcionarios/:id/editar', component: EditarFuncionarioComponent},
      {path: '', component: HomeComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
