/* “Si la temperatura ambiente es menor que la temperatura establecida , el termostato enciende la calefacción (comparación de temperaturas)”.
Imagina que estás programando una máquina expendedora muy simple. Esta máquina solo vende un producto al precio de$500. El usuario debe ingresar la cantidad de dinero que desea introducir. */

/* Instrucciones */
/* Solicitar el dinero: Utiliza prompt para pedir al usuario que ingrese la cantidad de dinero que quiere introducir.
Verificar el dinero: Compara la cantidad ingresada con el precio del producto ($ 500). Dar el producto o cambio:
Si el usuario introdujo exactamente $500, mostrar un mensaje indicando que puede tomar el producto.
Si el usuario introdujo más de $500, mostrar un mensaje indicando que puede tomar el producto y que se le devolverá el cambio.
Si el usuario introdujo menos de $500, mostrar un mensaje indicando que la cantidad es insuficiente. */

precioProducto = 500; //en pesos

const solicitarDinero = () => {
  let ingresoDinero = parseFloat(
    prompt('Ingrese el dinero que quiere introducir:')
  );
  return ingresoDinero;
};

const verificarDinero = () => {
  let dineroIngresado = solicitarDinero();

  if (precioProducto === dineroIngresado) {
    return 'Puede tomar el producto';
  } else if (precioProducto < dineroIngresado) {
    let dineroDevuelto = dineroIngresado - precioProducto;
    return `Puede tomar el producto.\nSe le devolverá $${dineroDevuelto}.`;
  } else {
    return `La cantidad de dinero ingresado es insuficiente.\n El precio del producto es $${precioProducto}.`;
  }
};

let res = 'N';

do {
  const resultado = verificarDinero();
  alert(resultado);

  res = prompt('Desea ingresar realizar una nueva compra?').toLocaleUpperCase();
} while (res === 'S');

alert('Gracias por su compra!!');
