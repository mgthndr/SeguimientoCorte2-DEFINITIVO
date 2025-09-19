
let citas = [];


function programarCita() {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let fecha = prompt("Ingrese la fecha de la cita (YYYY-MM-DD):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):");
    let medico = prompt("Ingrese el nombre del médico asignado:");

    
    if (!nombre || !fecha || !hora || !medico) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    citas.push({
        nombre,
        fecha,
        hora,
        medico
    });

    alert("Cita programada exitosamente.");
}

function verCitas() {
    if (citas.length === 0) {
        alert("No hay citas programadas.");
        return;
    }

    
    let citasOrdenadas = citas.slice().sort((a, b) => {
        let fechaA = a.fecha + " " + a.hora;
        let fechaB = b.fecha + " " + b.hora;
        return fechaA.localeCompare(fechaB);
    });

    let resumen = "Citas programadas:\n";
    citasOrdenadas.forEach((cita, i) => {
        resumen += `${i + 1}. ${cita.fecha} ${cita.hora} - Paciente: ${cita.nombre}, Medico: ${cita.medico}\n`;
    });
    alert(resumen);
}


function cancelarCita() {
    if (citas.length === 0) {
        alert("No hay citas para cancelar.");
        return;
    }
    verCitas();
    let num = Number(prompt("Ingrese el número de la cita que desea cancelar:"));
    if (isNaN(num) || num < 1 || num > citas.length) {
        alert("Numero de cita invalido.");
        return;
    }
    citas.splice(num - 1, 1);
    alert("Cita cancelada exitosamente.");
}

// Menú principal
let salir = false;
do {
    let opcion = prompt(
        "Sistema de Gestión de Citas Medicas\n" +
        "1. Programar una cita\n" +
        "2. Ver citas programadas\n" +
        "3. Cancelar una cita\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );
    switch (opcion) {
        case "1":
            programarCita();
            break;
        case "2":
            verCitas();
            break;
        case "3":
            cancelarCita();
            break;
        case "4":
            salir = true;
            alert("Gracias por usar el sistema de citas medicas.");
            break;
        default:
            alert("Opcion no valida.");
    }
} while (!salir);