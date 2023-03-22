/*
Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.

Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho com este desafio e começa a escrever o código necessário para exibir as informações na tela. Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.
*/
const restaurantes = [
    {
        nome: gets(),
        avaliacao: parseFloat(gets())
    },
    {
        nome: gets(),
        avaliacao: parseFloat(gets())
    }
];

const melhorRestaurante = restaurantes.reduce((rest1, rest2) => {
    return rest1.avaliacao > rest2.avaliacao ? rest1 : rest2;
});

const nomeFormatado = melhorRestaurante.nome.trim();
const avaliacaoFormatada = melhorRestaurante.avaliacao.toFixed(1);

console.log(`Restaurante: ${nomeFormatado}, Avaliação: ${avaliacaoFormatada}`);
