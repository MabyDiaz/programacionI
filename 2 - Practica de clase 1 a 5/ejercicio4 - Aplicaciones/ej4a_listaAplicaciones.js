const aplicaciones = [
  {
    nombre: 'Candy Crush',
    categoria: 'Juegos',
    tamaño: '94 MB',
    calificacion: 4.7,
    imagen: './img/CandyCrash.png',
  },

  {
    nombre: 'Facebook',
    categoria: 'Redes Sociales',
    tamaño: '140 MB',
    calificacion: 4.2,
    imagen: './img/logoFacebook.png',
  },

  {
    nombre: 'Instagram',
    categoria: 'Redes Sociales',
    tamaño: '120 MB',
    calificacion: 4.5,
    imagen: './img/logoInstagram.png',
  },

  {
    nombre: 'Spotify',
    categoria: 'Música y Audio',
    tamaño: '110 MB',
    calificacion: 4.6,
    imagen: './img/logoSpotify.png',
  },

  {
    nombre: 'WhatsApp',
    categoria: 'Mensajería',
    tamaño: '100 MB',
    calificacion: 4.8,
    imagen: './img/logoWhatsApp.png',
  },

  {
    nombre: 'TikTok',
    categoria: 'Redes Sociales',
    tamaño: '150 MB',
    calificacion: 4.4,
    imagen: './img/logoTikTok.png',
  },

  {
    nombre: 'Google Maps',
    categoria: 'Viajes y Navegación',
    tamaño: '125 MB',
    calificacion: 4.7,
    imagen: './img/logoGoogleMaps.png',
  },

  {
    nombre: 'YouTube',
    categoria: 'Entretenimiento',
    tamaño: '145 MB',
    calificacion: 4.6,
    imagen: './img/logoYouTube.png',
  },

  {
    nombre: 'LinkedIn',
    categoria: 'Negocios',
    tamaño: '95 MB',
    calificacion: 4.3,
    imagen: './img/logoLinkedIn.png',
  },

  {
    nombre: 'Duolingo',
    categoria: 'Educación',
    tamaño: '80 MB',
    calificacion: 4.7,
    imagen: './img/logoDuolingo.png',
  },

  {
    nombre: 'Fitbit',
    categoria: 'Salud y Bienestar',
    tamaño: '90 MB',
    calificacion: 4.2,
    imagen: './img/logoFitbit.png',
  },

  {
    nombre: 'Adobe Lightroom',
    categoria: 'Fotografía y Video',
    tamaño: '170 MB',
    calificacion: 4.5,
    imagen: './img/logoLightroom.png',
  },

  {
    nombre: 'Coinbase',
    categoria: 'Finanzas',
    tamaño: '75 MB',
    calificacion: 4.1,
    imagen: './img/logoCoinbase.png',
  },

  {
    nombre: 'Amazon',
    categoria: 'Compras',
    tamaño: '110 MB',
    calificacion: 4.6,
    imagen: './img/logoAmazon.png',
  },

  {
    nombre: 'BBC News',
    categoria: 'Noticias y Revistas',
    tamaño: '85 MB',
    calificacion: 4.3,
    imagen: './img/logoBBCNews.png',
  },

  {
    nombre: 'Netflix',
    categoria: 'Entretenimiento',
    tamaño: '160 MB',
    calificacion: 4.7,
    imagen: './img/logoNetflix.png',
  },

  {
    nombre: 'GarageBand',
    categoria: 'Música y Audio',
    tamaño: '200 MB',
    calificacion: 4.8,
    imagen: './img/logoGarageBand.png',
  },

  {
    nombre: 'Airbnb',
    categoria: 'Viajes y Navegación',
    tamaño: '130 MB',
    calificacion: 4.7,
    imagen: './img/logoAirbnb.png',
  },

  {
    nombre: 'Waze',
    categoria: 'Viajes y Navegación',
    tamaño: '95 MB',
    calificacion: 4.5,
    imagen: './img/logoWaze.png',
  },

  {
    nombre: 'Zillow',
    categoria: 'Bienes Raíces',
    tamaño: '100 MB',
    calificacion: 4.4,
    imagen: './img/logoZillow.png',
  },
];

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
        'A veces fingir que eres productivo es casi lo mismo que serlo... ¡organízate!';
      break;

    case 'Salud y Bienestar':
      mensajeAMostrar =
        'La única app que te hará sentir mejor después de comer pizza... ¡salud y bienestar al rescate!';
      break;

    case 'Educación':
      mensajeAMostrar =
        'Nunca es tarde para aprender algo nuevo... ¡aunque sea solo para impresionar en las reuniones!';
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
        'Siempre hay espacio para una compra más en el carrito... ¡solo una!';
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
        'Seguir a tu equipo favorito es tan importante como hacer ejercicio... ¡o más!';
      break;

    case 'Entretenimiento':
      mensajeAMostrar =
        '¡Hora de desconectar y sumergirte en horas de diversión sin remordimientos! No te preocupes, el sofá te va a querer igual.';
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
        'Saber si llueve o hace sol es la excusa perfecta para quedarte en casa.';
      break;

    case 'Citas':
      mensajeAMostrar =
        'Swipea, conoce gente, y cuéntale a tu abuela que sí, estás "saliendo"... con alguien.';
      break;

    case 'Bienes Raíces':
      mensajeAMostrar =
        'Encuentra el hogar de tus sueños... ¡y luego averigua cómo pagarlo!';
      break;

    case 'Mensajería':
      mensaje = 'Mantente conectado con tus amigos y familiares al instante.';
      break;

    default:
      mensajeAMostrar = 'Esta aplicación es útil en su categoría.';
      break;
  }

  return mensajeAMostrar;
}

function crearListaAplicaciones() {
  const listaDiv = document.querySelector('.lista-aplicaciones');

  aplicaciones.forEach((app, index) => {
    const appDiv = document.createElement('div');
    appDiv.classList.add('aplicacion');
    appDiv.innerHTML = `<img src="${app.imagen}" alt="${app.nombre}" data-index="${index}" class="logo-img"> <h3 data-index="${index}">${app.nombre}</h3>`;

    listaDiv.appendChild(appDiv);
  });

  document
    .querySelectorAll('.aplicacion img, .aplicacion h3')
    .forEach((element) => {
      element.addEventListener('click', mostrarModal);
    });
}

function mostrarModal(event) {
  const index = event.target.getAttribute('data-index');
  const app = aplicaciones[index];
  const mensaje = mostrarMensaje(app);

  const contenidoModal = document.querySelector('.contenido-modal');
  contenidoModal.innerHTML = `<div class="modal-info">
        <h2 class="modal-title"><strong>Nombre:</strong> ${app.nombre}</h2>
        <p><strong>Categoría:</strong> ${app.categoria}</p>
        <p><strong>Tamaño:</strong> ${app.tamaño}</p>
        <p><strong>Calificación:</strong> ${app.calificacion}</p>
        <p><strong>Mensaje:</strong> <span class="mensaje">${mensaje}</span></p>
      </div>
      <img src="${app.imagen}" alt="${app.nombre}" class="modal-logo"></img>`;

  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', cerrarModal);

crearListaAplicaciones();
