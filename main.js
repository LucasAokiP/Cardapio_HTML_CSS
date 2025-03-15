    //simulação de adiçao de produtos na cesta do site
    const botoesAdicionar   = document.querySelectorAll(".adicionar");  //querySelectorAll ele pega todos os elementos da classe
    const listaPedido       = document.getElementById('Lista_Pedido');  //getElementById pega o elemento pelo ID dele
    const totalElemento     = document.getElementById('total');
    let total               = 0;

    botoesAdicionar.forEach(botao =>
            {botao.addEventListener('click',() => {
                //obtem o elemnto pai do botao
                const produto = botao.parentElement;
                //obtem o nome do produto a partir do texto dentro do elemento H3
                const nome = produto.querySelector('h3').textContent;
                //obtem o preço do produto removendo o texto R$ e convertendo para numero decimal
                const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$',''));
                // cria novo item de lista <li> para adicionar o produto ao pedido
                const itemPedido = document.createElement('li');
                // formata o texto com duas casas
                itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
            });
   });

