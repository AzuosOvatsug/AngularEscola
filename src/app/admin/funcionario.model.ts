import {Pessoa} from "./pessoa.model";
import {Cargo} from "./cargo.model";
import {Funcao} from "./funcao.model";
export class Funcionario {
    constructor(public pessoa: Pessoa,
                public tipo: String,
                public cargo: Cargo,
                public funcao: Array<Funcao> ) {
    }
  }