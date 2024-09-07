let Celular1 = prompt('Ingrese el nombre del primer celular:');
let Cel1Precio = parseFloat(prompt('Ingrese el precio del primer celular:'));

let Celular2 = prompt('Ingrese el nombre del segundo celular:');
let Cel2Precio = parseFloat(prompt('Ingrese el precio del segundo celular:'));

function compararPrecio() {
  if (Cel1Precio < Cel2Precio) {
    console.log(
      `El Celular ${Celular1} es el más barato con el precio de $${Cel1Precio}`
    );
    return Cel1Precio;
  } else {
    console.log(
      `El celular ${Celular2} es el más barato con el precio de $${Cel2Precio}`
    );
    return Cel2Precio;
  }
}

function precioMasIva() {
  precioCelular = compararPrecio();
  precioFinal = precioCelular * 1.21;
  return precioFinal;
}
precioFinal = precioMasIva();
console.log(`Tu celular tiene un precio final de $${precioFinal}`);

const celIva = document.getElementById('celIva');

celIva.innerText = `El precio del celular más económico con IVA es $${precioFinal}.`;
