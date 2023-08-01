// 1. Pegar os valores
// 2. Calcular a idade
// 3. Gerar classficação de Idade

function calculaIdade(event) {

    event.preventDefault()
    console.log("funciono!!!!!!!!!!!!");

    let dadosUsuario = pegarValores();

    let ano = calcular(dadosUsuario.ano)

    let classificacaoIdade = classificarIdade(ano);

    console.log(classificarIdade(ano));




    // let idade = calcular(dadosUsuario)
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


//organizar as informações
// function organizarDados(dadosUsuario, valorIdade, classificarIdade) {


//     let dadosUsuarioAtualizado = {
//         ...dadosUsuario,
//         classificacao: classificarIdade,
//         idade: valorIdade
//     }

//     console.log(dadosUsuarioAtualizado);

//     return dadosUsuarioAtualizado;
// }


// salvar dados na lista

// function cadastrarUsuario(usuario) {

//     let listaUsuarios = [];

//     // if (localStorage.getItem("usuariosCadastrados") == true) {
//     // quando nao tem comparacao, ele identifica como == true
//     if (localStorage.getItem("usuariosCadastrados")) {
//         listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
//     }


//     //pegando o usuario e passando pra lista
//     listaUsuarios.push(usuario)

//     localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))

//     // setItem altera o localStorage
// }



// listar

// function carregarUsuarios() {
//     let listaUsuarios = [];

//     if (localStorage.getItem("usuariosCadastrados")) {
//         listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
//     }

//     if (listaUsuarios.length == 0) {
//         let tabela = document.getElementById("corpo-tabela");

//         tabela.innerHTML = ` <tr class="linha-mensagem"> <td colspan="6">Nenhum usuário cadastrado!</td> </tr> `
//     } else {

//         montarTabela(listaUsuarios);
//     }
// }


// window.addEventListener('DOMContentLoaded', () => carregarUsuarios());


// mostrar resultado
// function montarTabela(listaDeCadastrados) {
//     let tabela = document.getElementById("corpo-tabela");

//     let template = '';

//     listaDeCadastrados.forEach(pessoa => {

//         template +=
//             ` <tr>
//             <td data-cell="nome">${pessoa.nome}</td>
//             <td data-cell="idade">${pessoa.idade}</td>
//         </tr> `

//     });

//     tabela.innerHTML = template;
// }