// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    DesenvolvedoraSoftware,
    Padeiro,
    Atriz,
    Piloto
}
interface Pessoa1 {
    nome: string,
    idade: number,
    profissao: Profissao
}


// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
let pessoa01: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.DesenvolvedoraSoftware
}

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
let pessoa02 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Piloto
}

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
let pessoa03 = {
    nome: "Vania",
    idade: 32,
    profissao: Profissao.Atriz
}

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
let pessoa04 = {
    nome: "Marcos",
    idade: 19,
    profissao: Profissao.Padeiro
}