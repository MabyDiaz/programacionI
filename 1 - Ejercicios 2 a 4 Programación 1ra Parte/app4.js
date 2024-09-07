function recomendarPlan(presupuesto, datosMinimos) {
  let planRecomendado = '';

  if (presupuesto >= 30 && datosMinimos <= 20) {
    planRecomendado = 'Premium';
  } else if (presupuesto >= 20 && datosMinimos <= 10) {
    planRecomendado = 'Estándar';
  } else if (presupuesto >= 10 && datosMinimos <= 5) {
    planRecomendado = 'Básico';
  } else {
    planRecomendado = 'Ninguno';
  }

  if (planRecomendado === 'Ninguno') {
    console.log('Ninguno de los planes cumple con los requisitos del usuario.');
  } else {
    console.log(
      `El plan más adecuado para el usuario es el plan ${planRecomendado}.`
    );
  }
}

recomendarPlan(25, 8); // Recomienda el plan Estándar.
recomendarPlan(15, 12); // Ningún plan cumple con los requisitos.
