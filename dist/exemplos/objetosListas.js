"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Desenvolvedora"] = 1] = "Desenvolvedora";
    Profissao[Profissao["Supervisora"] = 2] = "Supervisora";
})(Profissao || (Profissao = {}));
const Marissa = {
    nome: "Marissa",
    idade: 26,
    profissao: Profissao.Desenvolvedora
};
const Catarina = {
    nome: "Catarina",
    idade: 29,
    profissao: Profissao.Professora
};
const Larissa = {
    nome: "Larissa",
    idade: 29,
    profissao: Profissao.Supervisora
};
const Merissa = {
    nome: 'Merissa',
    idade: 21,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Inglês']
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(Merissa.materias);
