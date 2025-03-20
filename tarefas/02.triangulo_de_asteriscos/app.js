let ladosTriangulo = prompt('Digite o número de asteriscos que deseja no triângulo: ');
if (ladosTriangulo > 10 || ladosTriangulo < 3) {
  alert('Amigo, ajuda aí né! Escolha um número entre 3 e 10');
} else {
  function gerarTriangulo(ladosTriangulo) {
    let asteriscoTriangulo = '';
    for (i = 1; i <= ladosTriangulo; i++) {
      let triangulo = asteriscoTriangulo += '*';
      console.log(triangulo);    
    }
  gerarTriangulo(ladosTriangulo);
}
}
