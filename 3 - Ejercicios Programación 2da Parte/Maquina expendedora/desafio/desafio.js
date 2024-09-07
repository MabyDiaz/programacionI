/*Múltiples productos:Agregar más productos con diferentes precios y permitir al
usuario seleccionar el producto deseado.
Dinero enmonedas: Permitir que el usuario ingrese el dinero en monedas de
diferentes denominaciones.
Devolución de cambio enmonedas: Calcularla cantidad de monedas de cada
denominación a devolver.
Interfaz gráfica: Crear una interfaz gráfica simple utilizando HTML, CSS y
JavaScript para simular una máquina expendedora real. */

const productos = {
  1: {
    nombre: 'Arroz',
    precio: 2000,
  },

  2: {
    nombre: 'Aceite de Girasol',
    precio: 3000,
  },

  3: {
    nombre: 'Azúcar',
    precio: 1800,
  },

  4: {
    nombre: 'Harina de Trigo',
    precio: 1500,
  },

  5: {
    nombre: 'Fideos',
    precio: 1200,
  },
};

let listaDeProductos = document.getElementById('productos');

for (let key in productos) {
  listaDeProductos.innerHTML += `<div class='producto'>
  <input type='radio' name='producto' value='${key}'><span class='producto-key'>${key}</span>. Producto: ${productos[key].nombre} - Precio: $${productos[key].precio}
  </div>`;
}

const obtenerProductoSeleccionado = () => {
  const radios = document.querySelectorAll('input[name="producto"]');
  for (let radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null;
};

const comprar = () => {
  let productoSeleccionado = obtenerProductoSeleccionado();
  let dineroIngresado = parseFloat(document.getElementById('dinero').value);

  if (!productoSeleccionado) {
    Swal.fire({
      icon: 'warning',
      title: 'Selección de producto',
      text: 'Por favor, seleccione un producto.',
    });
    return;
  }

  if (isNaN(dineroIngresado) || dineroIngresado <= 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Cantidad de dinero',
      text: 'Por favor, ingrese una cantidad válida de dinero.',
    });
    return;
  }

  let precioProducto = productos[productoSeleccionado].precio;

  if (dineroIngresado === precioProducto) {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada con éxito!!',
      text: 'Puede tomar el producto.',
    });
  } else if (dineroIngresado > precioProducto) {
    let dineroDevuelto = dineroIngresado - precioProducto;
    let cambio = calcularCambio(dineroDevuelto);
    let mensajeCambio = `Puede tomar el producto.\nSe le devolverá $${dineroDevuelto}. `;

    for (let denominacion in cambio) {
      let cantidadBilletes = cambio[denominacion];
      let textoBilletes = cantidadBilletes === 1 ? 'billete' : 'billetes';
      mensajeCambio += `<br>${cantidadBilletes} ${textoBilletes} de $${denominacion}`;
    }

    Swal.fire({
      icon: 'success',
      title: 'Compra realizada con éxito!!',
      html: mensajeCambio,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Dinero insuficiente',
      html: `La cantidad de dinero ingresado es insuficiente.<br>El precio del producto es $${precioProducto}.`,
    });
  }
};

const billetes = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function calcularCambio(cambio) {
  let cambioRestante = cambio;
  let resultado = {};

  billetes.forEach((denominacion) => {
    const cantidadBilletes = Math.floor(cambioRestante / denominacion);
    if (cantidadBilletes > 0) {
      resultado[denominacion] = cantidadBilletes;
      cambioRestante -= cantidadBilletes * denominacion;
    }
  });

  return resultado;
}

/* Función año actual dinámico */
const actualizarAño = () => {
  const currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;
};
actualizarAño();

document.getElementById('btn-comprar').addEventListener('click', comprar);
