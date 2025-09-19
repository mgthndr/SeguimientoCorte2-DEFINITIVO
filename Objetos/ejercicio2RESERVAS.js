let reservas = [];
let habitacionesReservadas = 0;
let personasOcupandoHotel = 0;

function reservarHabitacion() {
    let nombre = prompt("Ingrese el nombre de quien reserva:");
    let pais = prompt("Ingrese el país de origen:");
    
    let tipo;
    while (true) {
        tipo = prompt("Tipo de habitación (individual/doble/familiar):").toLowerCase();
        if (["individual", "doble", "familiar"].includes(tipo)) break;
        alert("Tipo de habitación inválido.");
    }

    let fumador = prompt("¿Desea habitación para fumadores? (si/no):").toLowerCase() === "si";
    
    let maxPersonas = tipo === "individual" ? 2 : tipo === "doble" ? 4 : 6;
    let numPersonas;
    while (true) {
        numPersonas = Number(prompt(`¿Cuántas personas? (máximo ${maxPersonas}):`));
        if (numPersonas > 0 && numPersonas <= maxPersonas) break;
        alert("Cantidad de personas inválida.");
    }

    let mascota = false;
    if (tipo === "familiar") {
        mascota = prompt("¿Trae mascota? (si/no):").toLowerCase() === "si";
    }

    let periodo = prompt("¿Cuál es el periodo de la estadía? (ej: 3 noches):");

    reservas.push({
        nombre,
        pais,
        tipo,
        fumador,
        numPersonas,
        periodo,
        mascota
    });

    habitacionesReservadas++;
    personasOcupandoHotel += numPersonas;

    alert(
        `Reserva realizada:\n` +
        `Nombre: ${nombre}\n` +
        `País: ${pais}\n` +
        `Tipo: ${tipo}\n` +
        `Fumador: ${fumador ? "Sí" : "No"}\n` +
        `Personas: ${numPersonas}\n` +
        `Mascota: ${mascota ? "Sí" : "No"}\n` +
        `Periodo: ${periodo}\n` +
        `Habitaciones reservadas: ${habitacionesReservadas}\n` +
        `Personas ocupando el hotel: ${personasOcupandoHotel}`
    );
}

do {
    reservarHabitacion();
} while (prompt("¿Desea registrar otra reserva? (si/no):").toLowerCase() === "si");

alert(
    `RESUMEN DEL HOTEL\n` +
    `Total habitaciones reservadas: ${habitacionesReservadas}\n` +
    `Total personas ocupando el hotel: ${personasOcupandoHotel}\n` +
    `Reservas:\n` +
    reservas.map((r, i) =>
        `${i+1}. ${r.nombre} (${r.pais}) - ${r.tipo}, ${r.numPersonas} personas, ${r.fumador ? "fumador" : "no fumador"}, ${r.mascota ? "con mascota" : "sin mascota"}, ${r.periodo} noches`
    ).join('\n')
);