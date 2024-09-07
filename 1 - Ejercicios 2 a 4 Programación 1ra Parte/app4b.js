function compararPlanes() {
  const plan1 = { nombre: 'Plan 1', costo: 15, datos: 7 };
  const plan2 = { nombre: 'Plan 2', costo: 25, datos: 15 };

  const datosNecesarios = parseFloat(
    prompt('Ingrese la cantidad mínima de datos que necesita (en GB):')
  );
  let planRecomendado = null;

  if (datosNecesarios <= plan1.datos && datosNecesarios <= plan2.datos) {
    planRecomendado = plan1.costo <= plan2.costo ? plan1.nombre : plan2.nombre;
  } else if (datosNecesarios <= plan1.datos) {
    planRecomendado = plan1.nombre;
  } else if (datosNecesarios <= plan2.datos) {
    planRecomendado = plan2.nombre;
  }

  if (planRecomendado) {
    alert(`Le recomendamos elegir ${planRecomendado}.`);
  } else {
    alert('Ninguno de los planes cumple con sus requisitos.');
  }
}

compararPlanes();
