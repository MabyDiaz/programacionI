/* 4. Aplicaciones:
Crea un objeto literal que represente una aplicación de tu teléfono. Este objeto debe tener propiedades como: nombre, categoría, tamaño y calificación. Puedes utilizar un switch case para mostrar un mensaje diferente según la categoría de la aplicación (por ejemplo, "Juego", "Redes sociales", " */

const aplicacion = {
  nombre: 'Candy Crush Saga',
  categoria: 'Juegos',
  tamaño: '94 MB',
  calificacion: 4.7,
};

function mostrarMensaje(app) {
  let mensajeAMostrar;

  switch (app.categoria) {
    case 'Juegos':
      mensajeAMostrar =
        'Prepárate para perder la noción del tiempo con estos juegos... ¡adiós, productividad!';
      break;

    case 'Redes Sociales':
      mensajeAMostrar =
        '¡Stalkea sin culpa y comparte tus memes favoritos en las mejores redes sociales!';
      break;

    case 'Productividad':
      mensajeAMostrar =
        'Porque a veces fingir que eres productivo es casi lo mismo que serlo... ¡organízate!';
      break;

    case 'Salud y Bienestar':
      mensajeAMostrar =
        'La única app que te hará sentir mejor después de comer pizza... ¡salud y bienestar al rescate!';
      break;

    case 'Educación':
      mensajeAMostrar =
        'Porque nunca es tarde para aprender algo nuevo... ¡aunque sea solo para impresionar en las reuniones!';
      break;

    case 'Fotografía y Video':
      mensajeAMostrar =
        'Haz que tus selfies sean tan épicas que ni tu mamá pueda resistirse a darle like.';
      break;

    case 'Finanzas':
      mensajeAMostrar =
        'Domina el arte de sobrevivir hasta fin de mes... ¡sin sacrificar el café!';
      break;

    case 'Compras':
      mensajeAMostrar =
        'Porque siempre hay espacio para una compra más en el carrito... ¡solo una!';
      break;

    case 'Noticias y Revistas':
      mensajeAMostrar =
        'Infórmate y sorprende a tus amigos con datos que parecerán sacados de Wikipedia.';
      break;

    case 'Viajes y Navegación':
      mensajeAMostrar =
        'Perderse es cosa del pasado... ahora solo te pierdes si quieres (y siempre con estilo)!';
      break;

    case 'Música y Audio':
      mensajeAMostrar =
        'Convierte cada momento en un videoclip épico con la banda sonora de tu vida.';
      break;

    case 'Estilo de Vida':
      mensajeAMostrar =
        'De la cama al éxito en un solo clic... ¡vive tu mejor vida!';
      break;

    case 'Deportes':
      mensajeAMostrar =
        'Porque seguir a tu equipo favorito es tan importante como hacer ejercicio... ¡o más!';
      break;

    case 'Entretenimiento':
      mensajeAMostrar =
        'Cuando Netflix dice "¿sigues ahí?", sabes que esta app es perfecta para ti.';
      break;

    case 'Personalización':
      mensajeAMostrar =
        'Convierte tu teléfono en una extensión de tu personalidad... ¡o al menos de tus memes!';
      break;

    case 'Libros y Referencias':
      mensajeAMostrar =
        'Para que cuando digas "lo leí en un libro", realmente sea cierto (aunque sea digital)!';
      break;

    case 'Negocios':
      mensajeAMostrar =
        'Haz que tu jefe piense que trabajas el doble... ¡gracias a estas apps de negocios!';
      break;

    case 'Herramientas':
      mensajeAMostrar =
        'El mejor amigo de tu teléfono... ¡excepto cuando te quedas sin batería!';
      break;

    case 'Clima':
      mensajeAMostrar =
        'Porque saber si llueve o hace sol es la excusa perfecta para quedarte en casa.';
      break;

    case 'Citas':
      mensajeAMostrar =
        'Swipea, conoce gente, y cuéntale a tu abuela que sí, estás "saliendo"... con alguien.';
      break;

    case 'Bienes Raíces':
      mensajeAMostrar =
        'Encuentra el hogar de tus sueños... ¡y luego averigua cómo pagarlo!';
      break;

    default:
      mensajeAMostrar = 'Esta aplicación es útil en su categoría.';
      break;
  }

  return mensajeAMostrar;
}

let mensaje = mostrarMensaje(aplicacion);

const divResultado = document.getElementById('resultado');

divResultado.innerHTML = `<h2><strong>Nombre:</strong> <span class="nombre">${aplicacion.nombre}</span></h2>\n<p><strong>Categoría:</strong> ${aplicacion.categoria}</p>\n<p><strong>Tamaño:</strong> ${aplicacion.tamaño}</p>\n<p><strong>Calificacion:</strong> ${aplicacion.calificacion}</p>\n<p><strong>Mensaje:</strong><span class="mensaje"> ${mensaje}</span></p>`;
