// Lista de amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim(); // Pegando o input corretamente

    let mensagemErro = document.getElementById('mensagemErro'); // Elemento para mensagens de erro

    // Verifica se o nome é válido
    if (nome === "") {
        mensagemErro.innerHTML = "Por favor, insira um nome.";
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        mensagemErro.innerHTML = "Nome repetido!";
        return;
    }

    // Limpa mensagens anteriores e adiciona à lista
    mensagemErro.innerHTML = "";
    amigos.push(nome);
    exibirLista();
    limparCampo();
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.getElementById('amigo').value = "";
}

// Função para exibir a lista de amigos na tela
function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de exibir os novos valores

    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.innerHTML = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Sem nomes na lista!");
        return;
    }

    exibirSorteado();
}

// Função para exibir o nome sorteado
function exibirSorteado() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa o resultado anterior

    let randomIndex = Math.floor(Math.random() * amigos.length);
    let li = document.createElement('li');
    li.innerHTML = amigos[randomIndex];
    resultado.appendChild(li);
}
