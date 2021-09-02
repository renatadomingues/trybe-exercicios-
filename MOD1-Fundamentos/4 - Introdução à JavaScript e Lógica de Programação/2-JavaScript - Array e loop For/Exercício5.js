let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0]; //não entendi pq declara o elemento do index[0] aqui

for (let index = 1; index < numbers.length; index++) {
    if(numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
  }

  console.log(maiorNumero)
