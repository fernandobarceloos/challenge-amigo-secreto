//Armazenar os nomes digitados
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar campo vazio
    if (nomeAmigo === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    // Validar duplicado
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome "${nomeAmigo}" já está na lista.`);
        return;
    }

    // Adicionar nome
    amigos.push(nomeAmigo);

    // Limpar campo e resultado anterior
    inputAmigo.value = "";
    document.getElementById('resultado').innerHTML = "";

    // Atualizar lista
    atualizarLista();
}

// Função para atualizar a lista
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join("");
}

// Função para sortear um amigo
function sortearAmigo() {
    //Valida para adicionar
    if (amigos.length === 0) {
        alert("Não há nenhum nome na lista. Adicione pelo menos um nome.");
        return;
    }
    //Valida para ter ao menos 3 nomes
    if (amigos.length < 3) {
        alert("É necessário pelo menos 3 nomes para sortear.");
        return;
    }

    // Gerador aleatório
    const geradorAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[geradorAleatorio]; //Obtem o nome sorteado

    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}
