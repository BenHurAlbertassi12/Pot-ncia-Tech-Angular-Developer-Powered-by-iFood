/*
Imagine que você está criando um aplicativo de entrega de comida e precisa informar ao usuário o tempo estimado de entrega de um restaurante. A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.
*/
const nomeRestaurante = gets();
const tempoEstimadoEntrega = parseInt(gets());

const mensagem = `O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`;

print(mensagem);
