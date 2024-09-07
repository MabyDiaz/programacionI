/* 5. Plan de datos:
Simula el consumo de datos de un plan móvil. Crea una variable para almacenar el límite de datos y otra para el consumo actual. Utiliza por ejemplo un ciclo while para ir incrementando el consumo hasta alcanzar o superar el límite. Cuando se supere el límite, muestra un mensaje indicando que se ha alcanzado el límite de datos. */

const botonSimular = document.getElementById('simular');
const inputLimite = document.getElementById('limite');
const inputConsumoActual = document.getElementById('consumoActual');
const resultado = document.getElementById('resultado');

botonSimular.addEventListener('click', () => {
  const limite = parseInt(inputLimite.value);
  let consumoActual = parseInt(inputConsumoActual.value);

  // Función para simular el consumo y actualizar la visualización
  const simularConsumo = () => {
    if (consumoActual <= limite) {
      consumoActual += 10; // Puedes ajustar el incremento por iteración
      resultado.textContent = `Consumo actual: ${consumoActual} MB`;

      // Simular una actualización cada cierto tiempo (ajusta el valor de 100)
      setTimeout(simularConsumo, 1000);
    } else {
      resultado.textContent = '¡Has alcanzado el límite de datos de tu plan!';
    }
  };

  simularConsumo();
});
