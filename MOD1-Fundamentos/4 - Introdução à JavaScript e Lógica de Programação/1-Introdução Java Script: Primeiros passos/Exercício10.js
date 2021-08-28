const valorCusto =10;
const valorVenda = 30;

if((valorCusto>=0 && valorVenda>=0)) {
const valorTotal = valorCusto + (valorCusto*0,2);
const lucro = (valorVenda - valorTotal)*1000;
console.log(lucro);
} else {
    console.log("Erro")
};