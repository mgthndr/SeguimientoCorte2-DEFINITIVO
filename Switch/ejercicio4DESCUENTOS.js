let opciones = prompt(`# Seleccione el dia de la semana:\n`
        + `1. Lunes\n`
        + `2. Martes\n`
        + `3. Miercoles\n`
        + `4. Jueves\n`
        + `5. Viernes\n`
        + `6. Sabado\n`
        + `7. Domingo\n`
        + `---------------------------------------------------------\n`
        + `Por favor ingrese el numero correspondiente a su seleccion:`
);
      
const Lunes = { nombre: "Lunes", mensaje: "10%" };
const Martes = { nombre: "Martes", mensaje: "15%" };
const Miercoles = { nombre: "Miercoles", mensaje: "20%" };
const Jueves = { nombre: "Jueves", mensaje: "No aplicable" };
const Viernes = { nombre: "Viernes", mensaje: "No aplicable" };
const Sabado = { nombre: "Sabado", mensaje: "No aplicable" };
const Domingo = { nombre: "Domingo", mensaje: "No aplicable" };


switch (opciones) {
    case "1":
        seleccionada = Lunes;
        break;
    case "2":
        seleccionada = Martes;
        break;
    case "3":
        seleccionada = Miercoles;
        break;
    case "4":
        seleccionada = Jueves;
        break;
    case "5":
        seleccionada = Viernes;
        break;
    case "6":
        seleccionada = Sabado;
        break;
    case "7":
        seleccionada = Domingo;
        break;
    default:
        alert("Opcion no valida, por favor recargue la pagina e intente de nuevo");
        break;
}


alert(`Ha seleccionado el dia ${seleccionada.nombre}`);

alert(`Dia ${seleccionada.nombre}\n`
    + `Informacion del descuento: ${seleccionada.mensaje}\n`
);  

