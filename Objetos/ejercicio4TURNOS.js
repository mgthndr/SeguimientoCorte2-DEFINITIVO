const sistemaTurnos = {
    cola: [],
    contador: 0,

    tomarTurno: function() {
        this.contador++;
        this.cola.push(this.contador);
        alert(`Turno tomado. Su numero es: ${this.contador}`);
    },

    llamarCliente: function() {
        if (this.cola.length === 0) {
            alert("No hay clientes en la cola.");
            return;
        }
        const turnoLlamado = this.cola.shift();
        alert(`Cliente con turno ${turnoLlamado}, por favor acerquese.`);
    },

    mostrarCola: function() {
        if (this.cola.length === 0) {
            alert("La cola de espera esta vacia.");
        } else {
            alert("Cola de espera actual:\n" + this.cola.join(", "));
        }
    },

    mostrarContador: function() {
        alert(`Total de turnos tomados hasta ahora: ${this.contador}`);
    }
};

// Menú principal
let salir = false;
do {
    let opcion = prompt(
        "Sistema de Gestion de Turnos - Banco\n" +
        "1. Tomar un turno\n" +
        "2. Llamar al siguiente cliente\n" +
        "3. Mostrar cola de espera\n" +
        "4. Mostrar contador de turnos\n" +
        "5. Salir\n" +
        "Seleccione una opción:"
    );
    switch (opcion) {
        case "1":
            sistemaTurnos.tomarTurno();
            break;
        case "2":
            sistemaTurnos.llamarCliente();
            break;
        case "3":
            sistemaTurnos.mostrarCola();
            break;
        case "4":
            sistemaTurnos.mostrarContador();
            break;
        case "5":
            salir = true;
            alert("Gracias por usar el sistema de turnos.");
            break;
        default:
            alert("Opción no válida.");
    }
} while (!salir);