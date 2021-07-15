"use strict";
// Tipo boolean
const contaPaga = false;
// Tipo number
const idade = 44;
const avaliacao = 4.5;
// Tipo string
const nome = 'Alexandre Xavier';
// Tipo Array
const idades = [4, 18, 24, 42, 44, 64];
const idades2 = [4, 18, 24, 42, 44, 64];
// Tuple
let jogadores;
jogadores = ['Felipe', 'Caio', 'Alexandre', 'Sandro'];
// Tipo Enum
var Statusaprovacao;
(function (Statusaprovacao) {
    Statusaprovacao[Statusaprovacao["Aprovado"] = 0] = "Aprovado";
    Statusaprovacao[Statusaprovacao["Pendente"] = 1] = "Pendente";
    Statusaprovacao[Statusaprovacao["Rejeitado"] = 2] = "Rejeitado";
})(Statusaprovacao || (Statusaprovacao = {}));
const statusDaAprovacao = Statusaprovacao.Aprovado;
// Tipo Any
const retornoApi = [123, 'Vitor', false,];
const retornoApi2 = {
//......
};
// Tipo Void
function printarNaTela(msg) {
    console.log(msg);
}
// Tipo Null e Undefined
const u = undefined;
const n = null;
// Tipo Object
function criar(objecto) {
    //...
}
criar({
    propriedade: 1,
});
//criar('Alexandre') // da erro
// Tipo Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Tipo Union Types
const nota = 5;
function exibirNota(nota) {
    console.log('Anota é ${nota}');
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
const funcionarios = [{
        nome: 'Alexandre',
        sobrenome: 'Xavier',
        dataNascimento: new Date()
    },
    {
        nome: 'Manuela',
        sobrenome: 'Xavier',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionario) {
    for (let funcionario of funcionarios) {
        console.log('Nome do Funcionario: ', funcionario.nome);
    }
}
let altura = 1.6;
altura = null;
const contato = {
    nome: 'Alexandre',
    telefone: '11920099522',
};
// Tipo Assertions
const minhaIdade = 23;
minhaIdade.toString();
minhaIdade.toString();
//const input = document.getElementById("numero1") AS HTMLInputElement;
const input = document.getElementById("numero1");
console.log(input.value);
