let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let index = 0; index < numbers.length; index++) {
    soma+= numbers[index];
}

let mediaAritimetica = soma / numbers.length;

console.log(mediaAritimetica)

if(mediaAritimetica>20){
    console.log("valor maior que 20")
} else { console.log("valor menor que 20")};
