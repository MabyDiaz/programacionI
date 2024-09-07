/* Hacer el desarrollo que simule una calculadora básica. El programa debe pedir al usuario ingrese dos números y operación (+, -, *, /). Utiliza un switch para seleccionar la dentro de cada caso, emplea operador ternario verificar si alguno los es cero en las operaciones división o resta.*/

function calcularOperaciones() {
  // Función para obtener un número válido
  function obtenerNumero(mensaje) {
    let numero = parseFloat(prompt(mensaje));
    while (isNaN(numero)) {
      numero = parseFloat(prompt('Error. No es un número válido. ' + mensaje));
    }
    return numero;
  }

  let continuar = true;

  do {
    // Pedir al usuario los números y la operación
    let numero1 = obtenerNumero('Ingrese el primer número:');
    let numero2 = obtenerNumero('Ingrese el segundo número:');

    let operacion = prompt('Ingrese la operación deseada (+, -, *, /):');

    let resultado;

    // Utilizar switch para seleccionar la operación
    switch (operacion) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      case '/':
        resultado =
          numero2 === 0
            ? 'Error: No se puede dividir por cero.'
            : numero1 / numero2;
        break;
      default:
        resultado = 'Operación no válida. Por favor ingrese +, -, *, o /.';
    }

    // Mostrar el resultado
    alert(
      `El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`
    );

    // Preguntar al usuario si desea realizar otra operación
    let respuesta = prompt(
      '¿Desea realizar otra operación? (S/N)'
    ).toUpperCase();

    continuar = respuesta === 'S';
  } while (continuar);

  alert('Gracias por usar nuestra Calculadora Básica.');
}

// Ejecutar la función
calcularOperaciones();
