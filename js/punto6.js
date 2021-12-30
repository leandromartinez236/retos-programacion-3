const firstList = [];
const secondList = [];
let i1 = 1;
let i2 = 1;

while (i1 <=15) {
  const valor = parseInt(prompt('Ingrese los valores de la primera lista'));
  firstList.push(valor);
  i1++;
}

while (i2 <=15) {
  const valor = parseInt(prompt('Ingrese los valores de la Segunda lista'));
  secondList.push(valor);
  i2++;
}

const sumaFirstlist = firstList.reduce((a, b) => a + b);
const sumaSecondlist = secondList.reduce((a, b) => a + b);

if(sumaFirstlist === sumaSecondlist) {
  alert('Ambas listas son iguales');
}else if(sumaFirstlist > sumaSecondlist) {
  alert('Lista 1 mayor')
}else if(sumaFirstlist < sumaSecondlist) {
  alert('Lista 2 mayor')
}