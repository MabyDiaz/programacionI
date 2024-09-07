/* Mensajes de texto:
Simula una conversación de mensajes de texto. Crea un arreglo que contenga objetos, donde cada objeto represente un mensaje (con propiedades como: remitente, destinatario y contenido). Utiliza un “iterador” para recorrer el arreglo y mostrar cada mensaje en pantalla. */

const mensajes = [
  {
    remitente: 'Lola',
    destinatario: 'Martina',
    contenido: 'Hola Martina, ¿cómo estás?',
  },
  {
    remitente: 'Martina',
    destinatario: 'Lola',
    contenido: 'Hola Lola, estoy bien. ¿Y vos?',
  },
  {
    remitente: 'Lola',
    destinatario: 'Martina',
    contenido:
      'También estoy bien. Estaba pensando... ¿vamos a la fiesta de Martín este fin de semana?',
  },
  {
    remitente: 'Martina',
    destinatario: 'Lola',
    contenido: '¡Sí, suena genial! ¿Invitamos a alguien más?',
  },
  {
    remitente: 'Lola',
    destinatario: 'Martina',
    contenido: 'Estaba pensando en invitar a Tomás... ¿qué opinas?',
  },
  {
    remitente: 'Martina',
    destinatario: 'Lola',
    contenido: '¡Me parece perfecto!',
  },
];

const divConversacion = document.getElementById('conversacion');
const messageForm = document.getElementById('messageForm');
const remitenteInput = document.getElementById('remitente');
const contenidoInput = document.getElementById('contenido');

function agregarMensaje(mensaje) {
  const divMensaje = document.createElement('div');
  divMensaje.classList.add('message');

  if (mensaje.remitente === 'Lola') {
    divMensaje.classList.add('lola');
  } else {
    divMensaje.classList.add('martina');
  }

  divMensaje.innerHTML = `
    <div class="sender">${mensaje.remitente}</div>
    <div class="content">${mensaje.contenido}</div>
  `;

  divConversacion.appendChild(divMensaje);
}

mensajes.forEach((mensaje) => agregarMensaje(mensaje));

messageForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío del formulario
  const nuevoMensaje = {
    remitente: remitenteInput.value,
    contenido: contenidoInput.value,
    destinatario: remitenteInput.value === 'Lola' ? 'Martina' : 'Lola', // Determina el destinatario basado en el remitente
  };

  agregarMensaje(nuevoMensaje);

  contenidoInput.value = ''; // Limpia el campo de texto después de enviar
});
