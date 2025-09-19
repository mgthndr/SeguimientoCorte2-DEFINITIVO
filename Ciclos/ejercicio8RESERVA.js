let mesasDisponibles = 5;

for (let i = 1; i <= 5; i++) {
    let respuesta = prompt(`¿La mesa ${i} está reservada? (si/no)`);
    if (respuesta.toLowerCase() === "si") {
        mesasDisponibles--;
        alert(`Mesa ${i} reservada.`);
    } else {
        alert(`Mesa ${i} disponible.`);
    }
    alert(`Mesas disponibles restantes: ${mesasDisponibles}`);
}

alert(`Proceso finalizado.\nMesas disponibles al final: ${mesasDisponibles}`);