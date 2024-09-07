/* Hacer el desarrollo que simule una casa de cambio. El programa debe solicitar al usuario:
El tipo de dólar que desea operar (oficial, MEP o turista). 
La cantidad de dólares a comprar o vender.
Si desea comprar o vender.  
Utilizando el operador ternario y estructuras if...else, calcular monto a pagar o recibir, considerando los siguientes tipos de cambio (ejemplo):  
Dólar Oficial: compra a $958.50, venta 958.50. 
Dólar Blue compra a $1340, venta 1360. 
Dólar MEP: compra a $1270.51, venta 1270.28.  */

document.addEventListener('DOMContentLoaded', () => {
  const tipoDolar = document.getElementById('tipo-dolar');
  const cantDolar = document.getElementById('cant-dolar');
  const tipoOperacion = document.getElementById('tipo-operacion');
  const btnCalcular = document.getElementById('btn-calcular');
  const resultado = document.getElementById('resultado');

  btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();

    const dolar = tipoDolar.value;
    const operacion = tipoOperacion.value;
    const cantidad = parseFloat(cantDolar.value);

    if (!dolar || !operacion || isNaN(cantidad)) {
      resultado.innerText = 'Por favor, complete los campos correctamente.';
    }

    // Definir tasas de cambio
    const tasasCambio = {
      oficial: { compra: 958.5, venta: 958.5 },
      mep: { compra: 1340, venta: 1360 },
      turista: { compra: 1270.51, venta: 1270.28 },
    };

    // Obtener la tasa de cambio correspondiente al tipo de dólar y operación
    const tasa = tasasCambio[dolar][operacion];

    // Calcular monto
    const monto = cantidad * tasa;

    // Calcular el resultado de la operación
    const mensaje =
      operacion === 'compra'
        ? `<span>Su compra de dólares ha sido exitosa!!</span><br>Se debitarán ${monto.toFixed(
            2
          )} pesos de su cuenta por la compra de ${cantidad.toFixed(
            2
          )} dólares.`
        : `<span>Su venta de dólares ha sido exitosa!!</span><br>Se acreditarán ${monto.toFixed(
            2
          )} pesos en su cuenta por la venta de ${cantidad.toFixed(
            2
          )} dólares.`;

    resultado.innerHTML = mensaje;
  });
});
