/*
Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.
*/

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

const valorTotalHamburguer = valorHamburguer * quantidadeHamburguer;
const valorTotalBebida = valorBebida * quantidadeBebida;
const valorTotalPedido = valorTotalHamburguer + valorTotalBebida;
const troco = valorPago - valorTotalPedido;

console.log(`O preço final do pedido é R$ ${valorTotalPedido.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);
