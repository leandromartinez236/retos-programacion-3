suma = 0
for(f = 1; f <= 10; f++) {
  const valor = parseInt(prompt('Ingrese un valor'))
  if(f > 5){
    suma = suma + valor
  }
}
console.log(`La suma de los ultimos 5 valores es: ${suma}`)