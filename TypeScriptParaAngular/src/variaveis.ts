// variaveis

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = 'BenHur';
let idade: number = 40;
let altura: number = 1.75;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
  name: 'BenHur',
  cidade: 'VR/RJ',
  idade: 34,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: 'Tênis',
  preco: 89.99,
  unidades: 5,
};

// Arrays

let dados: string[] = ['BenHur', 'ana', 'adriana'];
let dados2: Array<string> = ['BenHur', 'ana', 'adriana'];

let infos: (string | number)[] = [322, 'BenHur'];

// Tuplas

let boleto: [string, number, number] = ['agua conta', 199.9, 32342342];

// arrays métodos (são os mesmos do Javascript)

dados.pop();

// Datas

let aniversario: Date = new Date('2022-12-01 05:00');
console.log(aniversario.toString());
