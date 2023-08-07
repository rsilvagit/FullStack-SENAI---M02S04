class Funcionario {
  constructor(nome, idade, salario) {
    if (new.target === Funcionario) {
      throw new Error('Não é possível instanciar uma classe abstrata.');
    }
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;

    this.getNome = () => this.nome;
    this.getIdade = () => this.idade;
    this.getSalario = () => this.salario;
  }
        setNome = (nome) => {
        if (typeof nome !== 'string') {
          throw new TypeError('O nome deve ser uma string.');
        }
        this.nome = nome;
      };
  
      setIdade = (idade) => {
        if (typeof idade !== 'number') {
          throw new TypeError('A idade deve ser um número.');
        }
        this.idade = idade;
      };
  
     setSalario = (salario) => {
        if (typeof salario !== 'number') {
          throw new TypeError('O salário deve ser um número.');
        }
        this.salario = salario;
      }
    };


class Gerente extends Funcionario {
  constructor(nome, idade, salario, departamento) {
    super(nome, idade, salario);
    this.departamento = departamento;
  }

  getDepartamento() {
    return this.departamento;
  }

  setDepartamento(departamento) {
    if (typeof departamento !== 'string') {
      throw new TypeError('O departamento deve ser uma string.');
    }
    this.departamento = departamento;
  }
}

class Programador extends Funcionario {
  constructor(nome, idade, salario, linguagem) {
    super(nome, idade, salario);
    this.linguagem = linguagem;
  }

  getLinguagem() {
    return this.linguagem;
  }

  setLinguagem(linguagem) {
    if (typeof linguagem !== 'string') {
      throw new TypeError('A linguagem deve ser uma string.');
    }
    this.linguagem = linguagem;
  }
}

const gerente1 = new Gerente('João', 35, 10000, 'Vendas');
const gerente2 = new Gerente('Maria', 42, 12000, 'Marketing');
const gerente3 = new Gerente('Pedro', 50, 15000, 'Finanças');

const programador1 = new Programador('Lucas', 25, 5000, 'JavaScript');
const programador2 = new Programador('Ana', 28, 6000, 'Python');
const programador3 = new Programador('Carlos', 30, 7000, 'Java');

console.log(`Gerente 1: Nome: ${gerente1.getNome()}, Idade: ${gerente1.getIdade()}, Salário: ${gerente1.getSalario()}, Departamento: ${gerente1.getDepartamento()}`);
console.log(`Gerente 2: Nome: ${gerente2.getNome()}, Idade: ${gerente2.getIdade()}, Salário: ${gerente2.getSalario()}, Departamento: ${gerente2.getDepartamento()}`);
console.log(`Gerente 3: Nome: ${gerente3.getNome()}, Idade: ${gerente3.getIdade()}, Salário: ${gerente3.getSalario()}, Departamento: ${gerente3.getDepartamento()}`);

console.log(`Programador 1: Nome: ${programador1.getNome()}, Idade: ${programador1.getIdade()}, Salário: ${programador1.getSalario()}, Linguagem: ${programador1.getLinguagem()}`);
console.log(`Programador 2: Nome: ${programador2.getNome()}, Idade: ${programador2.getIdade()}, Salário: ${programador2.getSalario()}, Linguagem: ${programador2.getLinguagem()}`);
console.log(`Programador 3: Nome: ${programador3.getNome()}, Idade: ${programador3.getIdade()}, Salário: ${programador3.getSalario()}, Linguagem: ${programador3.getLinguagem()}`);

