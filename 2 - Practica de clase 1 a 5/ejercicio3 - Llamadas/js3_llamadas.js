/* 3. Llamadas:
Crea un programa que simule el registro de llamadas. Utiliza un arreglo para almacenar objetos que representen cada llamada (con propiedades como: número marcado, duración y fecha). Luego, utilizando un ciclo y condicionales, muestra un resumen de las llamadas, indicando las llamadas de más de 5 */

const llamadas = [
  {
    numeroMarcado: '3517655144',
    duracion: 8,
    fecha: new Date('2024-08-12'),
  },
  {
    numeroMarcado: '3513547816',
    duracion: 4,
    fecha: new Date('2024-08-15'),
  },
  {
    numeroMarcado: '3512982471',
    duracion: 6,
    fecha: new Date('2024-08-10'),
  },
  {
    numeroMarcado: '3516524377',
    duracion: 3,
    fecha: new Date('2024-08-16'),
  },
  {
    numeroMarcado: '3515472163',
    duracion: 10,
    fecha: new Date('2024-08-13'),
  },
];

const resultado = document.getElementById('resultado');
const btnTodas = document.getElementById('btnTodas');
const btnLargas = document.getElementById('btnLargas');

function mostrarLlamadas(llamadasAMostrar) {
  resultado.innerHTML = '';

  llamadasAMostrar.forEach((llamada) => {
    const parrafo = document.createElement('p');

    parrafo.textContent = `Número Marcado: ${
      llamada.numeroMarcado
    }\nDuración: ${
      llamada.duracion
    } minutos\nFecha: ${llamada.fecha.toLocaleDateString()}`;

    resultado.appendChild(parrafo);
  });
}

btnTodas.addEventListener('click', () => {
  mostrarLlamadas(llamadas);
});

btnLargas.addEventListener('click', () => {
  const llamadasLargas = llamadas.filter((llamada) => llamada.duracion > 5);
  mostrarLlamadas(llamadasLargas);
});
