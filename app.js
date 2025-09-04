//Armazenar os nomes digitados
let amigos = [];

// Função para agregar um nome
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.ariaValueMax.trim();

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
    inputAmigo.ariaValu == "";

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

