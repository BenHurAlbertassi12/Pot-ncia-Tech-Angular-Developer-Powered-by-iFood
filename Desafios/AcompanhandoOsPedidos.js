/*
Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.

Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.
*/

const pedido = {
    cliente: {
        nome: gets(),
        endereco: gets(),
    },
    id: parseInt(gets()),
};

// Lê a quarta linha da "Entrada": Telefone do Cliente.
pedido.cliente.telefone = gets();

// Imprime a saída formatada de acordo com o desafio.
const saida = `Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}\nID: ${pedido.id}\nTel: ${pedido.cliente.telefone}`;
print(saida);
