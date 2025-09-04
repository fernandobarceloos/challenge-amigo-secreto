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

    // Verifica se é um número inteiro ou float
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nomeAmigo)) {
        alert('Números não são permitidos. Digite apenas nomes.');
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
    listaAmigos.innerHTML = amigos.map((nome, index) => `
  <li>
    ${nome}
    <button onclick="removerAmigo(${index})" class="btn-remove">❌</button>
  </li>
`).join("");
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

// Função para remover um Amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    document.getElementById('resultado').innerHTML = "";
}