const a = 30
const b = -60
const c = -90

let soma = a + b + c
let angulovalido = a>0 && b>0 && c>0

if(angulovalido){
if(soma===180){
    console.log("true")
}else {
    console.log("false")
}; 
}else{
    console.log("Erro: número negativo")
}