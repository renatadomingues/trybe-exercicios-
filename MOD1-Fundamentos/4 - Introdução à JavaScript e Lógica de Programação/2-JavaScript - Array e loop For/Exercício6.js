let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoModulo = 0;

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index]%2!==0) {
        resultadoModulo +=1
    }
}
//não entendi pq nesta parte não declara a operação do modulo
if (resultadoModulo === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(resultadoModulo);
  }
