/*
Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que encontre o pedido mais próximo a partir de uma lista de pedidos.O programa deve exibir o nome e o tipo de comida do pedido mais próximo.

Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo as informações de cada pedido(nome, tipo e distância)
*/

const pedidos = [
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets())
    },
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets())
    },
    {
        nome: gets(),
        tipo: gets(),
        distancia: parseFloat(gets())
    }
];

const pedidoMaisProximo = pedidos.reduce((anterior, atual) => {
    if (atual.distancia < anterior.distancia) {
        return atual;
    } else {
        return anterior;
    }
});

console.log(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);
