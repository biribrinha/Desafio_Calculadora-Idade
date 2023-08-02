

// OBJETIVO: Desenvolver calculadora de Idade, utilizando template disponibilizado


// Algoritmo:

// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)

// 3. Gerar a faixa etária

//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso

// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;

function calculaIdade(event) {

    // event.preventDefault()

    let dadosUsuario = pegarValores();

    let ano = calcular(dadosUsuario.ano)

    let classificacaoIdade = classificarIdade(ano);

    console.log(classificarIdade(ano));

    let usuarioAtualizado = organizarDados(dadosUsuario, ano, classificacaoIdade);


    cadastrarUsuario(usuarioAtualizado);




}

// 1. Pegar os valores
function pegarValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let anoRecebido = parseInt(document.getElementById("ano-nascimento").value)
    let diaRecebido = parseInt(document.getElementById("dia-nascimento").value)
    let mesRecebido = parseInt(document.getElementById("mes-nascimento").value)

    let dadosUsuario = {
        nome: nomeRecebido,
        ano: anoRecebido,
        dia: diaRecebido,
        mes: mesRecebido
    }

    console.log(dadosUsuario)

    return dadosUsuario;
}

// 2. Calcular a Idade

function calcular(ano) {

    let anoAtual = 2023;

    let idade = anoAtual - ano
    console.log(idade)
    return idade
}

// 3. Gerar a faixa etária

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


// 4. Organizar o objeto pessoa para salvar na lista

function organizarDados(dadosUsuario, idade, classificarIdade) {

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        idadeAtualizada: idade,
        classificarIdadeAtualizado: classificarIdade
    }

    console.log(dadosUsuarioAtualizado);

    return dadosUsuarioAtualizado
}


// 5. Cadastrar a pessoa na lista

function cadastrarUsuario(usuario) {
    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    listaUsuarios.push(usuario)
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
}


// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página



function carregarUsuarios() {
    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    if (listaUsuarios.length == 0) {
        let tabela = document.getElementById("corpo-tabela");

        tabela.innerHTML = ` <tr class="linha-mensagem"> <td colspan="6">Nenhum usuário cadastrado!</td> </tr> `
    } else {

        montarTabela(listaUsuarios);
    }

}

window.addEventListener('DOMContentLoaded', () => carregarUsuarios()); //chamar ao carregar a página


// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas


function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById("corpo-tabela");

    let template = '';

    listaDeCadastrados.forEach(pessoa => {
        template +=

            `
        <tr>
        <td data-cell="nome">${pessoa.nome}</td>
        <td data-cell="data de nascimento">${pessoa.ano}</td>
        <td data-cell="idade">${pessoa.idadeAtualizada}</td>
        <td data-cell="faixa etária">${pessoa.classificarIdadeAtualizado}</td>
        </tr>                    

        `


    });


    tabela.innerHTML = template;
}

// 8. Botão para limpar os registros;
function deletarRegistros() {
    localStorage.removeItem("usuariosCadastrados")
    window.location.reload();
}