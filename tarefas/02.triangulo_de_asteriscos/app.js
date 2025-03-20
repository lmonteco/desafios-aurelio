let ladosTriangulo = prompt('Digite o número de asteriscos que deseja no triângulo: ');
let numero = parseInt(ladosTriangulo);

if (numero > 10 || numero < 3) {
  alert('Amigo, ajuda aí né! Escolha um número entre 3 e 10');
} else {
  gerarTriangulo(numero);
}

function gerarTriangulo(numero) {
  let asteriscoTriangulo = '';
  for (i = 1; i <= numero; i++) {
    let triangulo = asteriscoTriangulo += '*';
    console.log(triangulo);
  }
}