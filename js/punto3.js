const cantidadEmpleados = parseInt(prompt('Ingresa la cantidad de empleados'));
let cobranMucho = 0;
let cobranPoco = 0;
let total = 0;
let i = 1;

while (i <= cantidadEmpleados) {
  const sueldo = parseInt(prompt('Ingrese el sueldo'));
  if(sueldo >= 100 && sueldo <= 300){
    cobranPoco++;
  }else {
    cobranMucho++;
  }
  total = total + sueldo;
  i++;
}

alert(`cobran mucho ${cobranMucho} y cobra poco ${cobranPoco} y total ${total}`)