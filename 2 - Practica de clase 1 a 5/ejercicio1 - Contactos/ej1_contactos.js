/* 1. Contactos:
 Crea un objeto literal que represente a un contacto de tu teléfono. Este objeto debe tener las propiedades: nombre, apellido, número de teléfono y correo electrónico. Luego, muestra toda la información del contacto en un formato legible. */

const contacto = {
  nombre: 'María',
  apellido: 'López',
  numTelefono: '3515231547',
  email: 'marialopez@gmail.com',
};

const divResultado = document.getElementById('resultado');
divResultado.innerHTML = `<strong>Nombre:</strong> ${contacto.nombre}<br>
                          <strong>Apellido:</strong> ${contacto.apellido}<br>
                          <strong>Número de Teléfono:</strong> ${contacto.numTelefono}<br>
                          <strong>Email:</strong> ${contacto.email}`;
