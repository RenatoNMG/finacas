document.addEventListener("DOMContentLoaded", function () {

    // Definindo o valor inicial do dinheiro
    let dinheiro = parseInt(document.getElementById("dinheiro").innerText.trim());





    // Função para adicionar itens ao inventário
    function adicionaraoInventario(nome, imagem, element) {
        let preco = parseInt(element.querySelectorAll("p")[1].textContent.trim());

        console.log("Dinheiro disponível: " + dinheiro);
        console.log("Preço do item: " + preco);

        // Verifica se o preço é menor ou igual ao valor disponível de dinheiro
        if (preco <= dinheiro) {
            console.log(nome + " pode ser adicionado ao inventário.");

            let inventarioContainer = document.getElementById("inventarioContainer");

            // Verifica se o item já existe no inventário
            let itemExistente = Array.from(inventarioContainer.children).find(item => {
                return item.querySelector("p").textContent === nome;
            });

            if (itemExistente) {
                // Se o item já existir, aumenta a quantidade
                let quantidade = itemExistente.querySelector(".quantidade");
                quantidade.textContent = parseInt(quantidade.textContent) + 1;
            } else {
                // Se o item não existir, cria um novo item
                let newinten = document.createElement("div");
                newinten.classList.add("inventarioItem");

                newinten.innerHTML = `
                    <p>${nome}</p>
                    <p class="quantidade">1</p>
                    <img src="${imagem}" alt="${nome}">
                `;

                // Adiciona o novo item ao início do inventário
                inventarioContainer.insertBefore(newinten, inventarioContainer.firstChild);
            }

            // Atualiza o dinheiro disponível
            dinheiro -= preco;
            document.getElementById("dinheiro").innerText = dinheiro;

            console.log(nome + " foi adicionado ao inventário.");
        } else {
            // Exibe uma mensagem de erro se o dinheiro for insuficiente
            console.log("Dinheiro insuficiente para comprar " + nome);
        }
    }

    // Atribuir evento de clique para adicionar ao inventário
    document.querySelectorAll('.loja div').forEach(item => {
        item.addEventListener('click', function () {
            let nome = item.querySelector('p').textContent;
            let imagem = item.querySelector('img').src;
            adicionaraoInventario(nome, imagem, item);
        });
    });

    // Coloca o mercado como a seção inicial visível
    mercado();

    // Tornar as funções acessíveis globalmente para os botões
    window.mercado = mercado;
    window.inventario = inventario;
});




// Função para alternar entre o Mercado
function mercado() {
    let mercado = document.getElementById("puupmercado");
    let inventario = document.getElementById("puupinventario");
    let fazenda = document.getElementById("campofazenda");

    // Verifica se o Mercado está visível, se sim, fecha, caso contrário, abre
    if (mercado.classList.contains("hidden")) {
        mercado.classList.remove("hidden");
        inventario.classList.add("hidden");
        fazenda.classList.add("hidden");
    } else {
        mercado.classList.add("hidden");
    }
}

// Função para alternar entre o Inventário
function inventario() {
    let inventario = document.getElementById("puupinventario");
    let mercado = document.getElementById("puupmercado");
    let fazenda = document.getElementById("campofazenda");

    // Verifica se o Inventário está visível, se sim, fecha, caso contrário, abre
    if (inventario.classList.contains("hidden")) {
        inventario.classList.remove("hidden");
        mercado.classList.add("hidden");
        fazenda.classList.add("hidden");
    } else {
        inventario.classList.add("hidden");
    }
}

function fazenda() {

    let fazenda = document.getElementById("campofazenda");
    let mercado = document.getElementById("puupmercado");
    let inventario = document.getElementById("puupinventario");

    
        // Se a fazenda estiver oculta, mostra a fazenda e esconde o mercado e inventário
    if (fazenda.classList.contains("hidden")) {
        mercado.classList.add("hidden");
        inventario.classList.add("hidden");
        fazenda.classList.remove("hidden");
    } 

    

    
}
function fechar() {
    let inventario = document.getElementById("puupinventario");
    let mercado = document.getElementById("puupmercado");
    let fazenda = document.getElementById("campofazenda");

    fazenda.classList.add("hidden");
    mercado.classList.add("hidden");
    inventario.classList.add("hidden");
    
}

function selecionarprodução(produto){
    
}




