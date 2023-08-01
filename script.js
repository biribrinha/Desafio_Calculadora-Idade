// 1. Pegar os valores
// 2. Calcular a idade
// 3. Gerar classficação de Idade

function calculaIdade(event) {

    event.preventDefault()

    let dadosUsuario = pegarValores();

    let ano = calcular(dadosUsuario.ano)

    classificarIdade(ano);

    console.log(classificarIdade(ano));


}


function pegarValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let anoRecebido = parseInt(document.getElementById("ano-nascimento").value)
    let diaRecebido = parseInt(document.getElementById("dia-nascimento").value)
    let mesRecebido = parseInt(document.getElementById("mes-nascimento").value)

    let dadosUsuario = {
        nome: nomeRecebido,
        ano: anoRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
    }

    console.log(dadosUsuario)

    return dadosUsuario;
}

// calculo

function calcular(ano) {

    let anoAtual = 2023;

    let idade = anoAtual - ano
    console.log(idade)
    return idade
}

//classificar faixa etaria

function classificarIdade(idade) {
    if (idade < 12) {

        return "Criança"


    } else if (idade < 17) {

        return "Adolescente"


    } else if (idade < 65) {

        return "Adulto"

    } else {

        return "Idosoooo"

    }
}


