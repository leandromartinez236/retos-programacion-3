let par = 0;
let impar = 0;
let i = 1;
const numEntero = parseInt(prompt('Ingrese "n" cantidad de numeros enteros'));

while (i <= numEntero) {
  const valor = parseInt(prompt('ingrese los valores'))
  if (valor % 2 === 0){
    par++;
  }else {
    impar++;
  }
  i++;
}

alert(`Hubo ${par} numeros pares y ${impar} numeros impares`)