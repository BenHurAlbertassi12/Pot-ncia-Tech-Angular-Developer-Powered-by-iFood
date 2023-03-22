/* 
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.
*/

const pedido = {
    cliente: gets(),
    endereco: gets(),
    itens: [],
    taxaEntrega: 5.0
};

const quantidadeItens = parseInt(gets());

while (pedido.itens.length < quantidadeItens) {
    const nomeItem = gets();
    const precoItem = parseFloat(gets());
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

let totalPedido = 0.0;

for (const item of pedido.itens) {
    totalPedido += item.preco;
}

totalPedido += pedido.taxaEntrega;

const mensagem = `Pedido: ${pedido.cliente}\nEndereco de entrega: ${pedido.endereco}\nTotal: R$ ${totalPedido.toFixed(2)}`;

print(mensagem);
