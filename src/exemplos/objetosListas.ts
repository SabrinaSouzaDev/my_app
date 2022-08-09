enum Profissao {
    Professora,
    Desenvolvedora,
    Supervisora
}

interface Pessoa {
    nome: string,
    idade?: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Marissa: Pessoa = {
    nome: "Marissa",
    idade: 26,
    profissao: Profissao.Desenvolvedora
}

const Catarina: Pessoa = {
    nome: "Catarina",
    idade: 29,
    profissao: Profissao.Professora
}

const Larissa: Pessoa = {
    nome: "Larissa",
    idade: 29,
    profissao: Profissao.Supervisora
}

const Merissa: Estudante = {
    nome: 'Merissa',
    idade: 21,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Inglês']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log("- ", item);
    }
}

listar(Merissa.materias);