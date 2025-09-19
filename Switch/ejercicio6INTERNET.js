let opciones = prompt(`# Cual plan desea consultar?:\n`
        + `1. Basico\n`
        + `2. Intermedio\n`
        + `3. Premium\n`
        + `---------------------------------------------------------\n`
        + `Por favor ingrese el numero correspondiente a su seleccion:`
);
const PlanBasico = { nombre: "Basico", precio: "4,000", velocidad: "20 Mbps", mensaje: "Plan Basico, ideal para navegacion y redes sociales." }; 
const PlanIntermedio = { nombre: "Intermedio", precio: "10,000", velocidad: "50 Mbps", mensaje: "Plan Intermedio, perfecto para streaming y videollamadas." }; 
const PlanPremium = { nombre: "Premium", precio: "30,000", velocidad: "100 Mbps", mensaje: "Plan Premium, maxima velocidad y estabilidad para multiples dispositivos." }; 

switch (opciones) {
    case "1":
        seleccionada = PlanBasico;
        break;
    case "2":
        seleccionada = PlanIntermedio;
        break;
    case "3":
        seleccionada = PlanPremium;
        break;
    default:
        alert("Opcion no valida, por favor recargue la pagina e intente de nuevo");
        break;
}

alert(`Ha seleccionado el Plan ${seleccionada.nombre}`);

alert(`Plan Seleccionado: ${seleccionada.nombre}\n`
    + `Costo del plan: COP$${seleccionada.precio}\n`
    + `Velocidad: ${seleccionada.velocidad}\n`
    + `----------------------------------------\n`
    + `Este plan tiene los siguientes beneficios: ${seleccionada.mensaje}\n`
);