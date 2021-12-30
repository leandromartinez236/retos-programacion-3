const cantidadAlturas = parseInt(prompt('Ingresa la cantidad de alturas'));
let alturaPromedio = 0;
let i = 1;

while (i <= cantidadAlturas) {
  const altura = parseInt(prompt('Ingrese la altura'));
  alturaPromedio = alturaPromedio + altura;
  i++;
}

alert(`La altura promedio es ${alturaPromedio / cantidadAlturas}`)