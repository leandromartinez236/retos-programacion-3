const num = parseInt(prompt('Ingrese un numero del 1 al 10'))
let multiplicador = 1
if(num <= 10) {
  for(let i = 1 ; i <= 13; i++) {
  const multiplo = num * multiplicador
  multiplicador++;
  console.log(multiplo)
 }
}
