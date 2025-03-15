// Simulação de adição de produtos na cesta do site
const botoesAdicionar = document.querySelectorAll(".adicionar"); // Pega todos os botões com a classe "adicionar"
const listaPedido = document.getElementById("Lista_Pedido"); // Obtém a lista de pedidos pelo ID
const totalElemento = document.getElementById("total");
let total = 0;

botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Obtém o elemento pai do botão
        const produto = botao.parentElement;
        
        // Obtém o nome do produto a partir do texto dentro do elemento <h3>
        const nome = produto.querySelector("h3").textContent;
        
        // Obtém o preço do produto, removendo "R$" e convertendo para número decimal
        const precoTexto = produto.querySelector(".preco").textContent.replace("R$", "").trim();
        const preco = parseFloat(precoTexto.replace(",", ".")) || 0; // Garante que seja convertido corretamente
        
        // Cria um novo item <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement("li");
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        
        // Adiciona o item criado à lista de pedidos
        listaPedido.appendChild(itemPedido);

        // Atualiza o total da compra
        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

// Simulação de finalização do pedido
const botaoFinalizarPedido = document.getElementById("finalizar_pedido");

botaoFinalizarPedido.addEventListener("click", () => {
    alert("Pedido realizado com sucesso! (Simulação)");

    // Limpa a lista de pedidos e reseta o total
    listaPedido.innerHTML = "";
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});
