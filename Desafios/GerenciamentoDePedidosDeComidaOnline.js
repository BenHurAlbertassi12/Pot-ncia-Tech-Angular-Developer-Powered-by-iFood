/*
Você foi contratado para desenvolver um sistema que armazena informações dos pedidos de comida online realizados por um cliente. O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado.
*/

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        let [nome, valor] = pedidos[i].split(' ');
        valor = parseFloat(valor);
        total += valor;
    }

    if (cupom === '10%') {
        total *= 0.9;
    } else if (cupom === '20%') {
        total *= 0.8;
    }

    return 'Valor total: ' + total.toFixed(2);
}
const n = parseInt(gets());
const pedidos = [];
for (let i = 0; i < n; i++) {
    pedidos.push(gets());
}
const cupom = gets();

const valorTotal = calcularValorTotal(n, pedidos, cupom);

print(valorTotal);
