function elegirPlan() {
    const planes = [
      { nombre: "Básico", costo: 10, datos: 5 },
      { nombre: "Estándar", costo: 20, datos: 10 },
      { nombre: "Premium", costo: 30, datos: 20 }
    ];
  
    let presupuesto = parseFloat(prompt("Ingrese su presupuesto mensual (en USD):"));
    let datosNecesarios = parseFloat(prompt("Ingrese la cantidad mínima de datos que necesita (en GB):"));
    let planElegido = null;
  
    for (let i = 0; i < planes.length; i++) {
      if (presupuesto >= planes[i].costo && datosNecesarios <= planes[i].datos) {
        planElegido = planes[i].nombre;
        break;
      }
    }
  
    if (planElegido) {
      alert(`El plan más adecuado para usted es el plan ${planElegido}.`);
    } else {
      alert("Ninguno de los planes cumple con sus requisitos.");
    }
  }
  
  elegirPlan();