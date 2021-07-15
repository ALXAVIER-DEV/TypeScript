// Tipo boolean
const contaPaga: boolean =false;

// Tipo number

const idade: number = 44;
const avaliacao: number = 4.5;

// Tipo string

const nome: string = 'Alexandre Xavier';

// Tipo Array

const idades: number[] =[4, 18, 24, 42, 44, 64];
const idades2: Array<number> = [4, 18, 24, 42, 44, 64];

// Tuple
let jogadores: [string, string, string, string];
jogadores = ['Felipe','Caio', 'Alexandre','Sandro'];

// Tipo Enum

enum Statusaprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}
const statusDaAprovacao: Statusaprovacao = Statusaprovacao.Aprovado;
// Tipo Any

const retornoApi: any []=[123,'Vitor',false,];
const retornoApi2: any ={
    //......
};

// Tipo Void

function printarNaTela(msg: string): void {
    console.log(msg);
    
}
// Tipo Null e Undefined

const u: undefined = undefined;
const n: null = null;

// Tipo Object

function criar (objecto: object) {
    //...
}
criar({
    propriedade: 1,
})

//criar('Alexandre') // da erro

// Tipo Never

function loopInfinito(): never {
    while(true) {}
}
function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Tipo Union Types
const nota: string | number = 5
function exibirNota (nota: number | string) {
    console.log('Anota é ${nota}');
}
exibirNota('10');
exibirNota(10);


// Tipo Aliases

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario []= [{
    nome: 'Alexandre',
    sobrenome: 'Xavier',
    dataNascimento: new Date()
},
{
    nome: 'Manuela',
    sobrenome: 'Xavier',
    dataNascimento: new Date()


}];


function tratarFuncionarios(funcionario: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do Funcionario: ' , funcionario.nome);
    }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: 'Alexandre',
    telefone: '11920099522',
}


// Tipo Assertions

const minhaIdade: any =23;
(minhaIdade as number).toString();
<number>minhaIdade.toString();

//const input = document.getElementById("numero1") AS HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);