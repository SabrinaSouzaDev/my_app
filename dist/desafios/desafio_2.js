"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["DesenvolvedoraSoftware"] = 0] = "DesenvolvedoraSoftware";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Piloto"] = 3] = "Piloto";
})(Profissao || (Profissao = {}));
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
let pessoa01 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.DesenvolvedoraSoftware
};
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
let pessoa02 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Piloto
};
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
let pessoa03 = {
    nome: "Vania",
    idade: 32,
    profissao: Profissao.Atriz
};
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
let pessoa04 = {
    nome: "Marcos",
    idade: 19,
    profissao: Profissao.Padeiro
};
