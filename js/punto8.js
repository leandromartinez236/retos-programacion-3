const triangulos = parseInt(prompt('Ingrese la cantidad de triangulos con los que trabajará'))
let cantidad = 0;
for(i = 0; i < triangulos; i++){
  const base = parseInt(prompt('Ingrese el valor de la base'))
  const altura = parseInt(prompt('Ingrese el valor de la altura'))
  const superficie = (base * altura) / 2 
  alert(`La superficie es ${superficie}`)
  if(superficie > 12) {
    cantidad++;
  }
}
alert(`La cantidad de triangulos con superficies mayores a 12 es: ${cantidad}`)
