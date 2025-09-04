//Armazenar os nomes digitados
let amigos = [];

// Função para agregar um nome
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    // Validar campo vazio
    if(nome == ''){
        alert('Por favor, insira um nome.')
        return;
    }

    // Validar que o nome é duplicado
    if(amigos.includes(nomeAmigo)) {
        alert(`Este nome ${nomeAmigo}já consta na lista, adicione um novo.`);
        return;
    }

    // Agrega o nome a lista de amigos
    amigos.push(nomeAmigo);

    // limpa o campo entrada
    inputAmigo.value == "";

    // Atualiza a lista
    atualizarLista() ;

}

// Função para atualizar a lista 
    function atualizarLista() {

        let listaAmigos = document.getElementById('listaAmigos');
        // limpa a lista atual
        listaAmigos.innerHTML = "";

        //percorre o array
        for(let i = 0; i < amigos.length; i++){
            let list = document.createElement('list');
            list.textContent = amigos[i];
            listaAmigos.appendChild(list);
        }

    }


// Função para selecionar um nome aleatório

function sortearAmigo() {
    //Valida se tem algo digitado
    if(amigos.length == 0){
        alert("Não tem nenhum nome adicionado. Por favor, digite um nome");
        return;
    }

    //Gerador aleatório
    let geradorAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtem o nome sorteado
    let amigoSorteado = amigos[geradorAleatorio];

    //Mostra o resultado
    let resultado = document.getElementById('resultado');
}