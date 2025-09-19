let opciones = prompt(`# Bienvenido a la Lavanderia de Maria\n`
        + `Que tipo de lavado necesita?\n`
        + `1. Rapido (Duracion: 3 minutos / COP$12,000)\n`
        + `2. Normal (Duracion: 12 minutos / COP$7,000)\n`
        + `3. Pesado (Duracion: 30 minutos / COP$25,000)\n`
        + `4. Delicado (Duracion: 7 minutos / COP$10,000)\n`
        + `---------------------------------------------------------\n`
        + `Por favor ingrese el numero correspondiente a su seleccion:`
);

//no habia visto la "Ayuda" con los valores 
const SecRapido = { nombre: "Rapido", precio: 12000 , duracion: 3 };
const SecNormal = { nombre: "Normal" , precio: 7000 , duracion: 12 };  
const SecPesado = { nombre: "Pesado"  , precio: 25000 , duracion: 30 };
const SecDelicado = { nombre: "Delicado"  , precio: 10000 , duracion: 7 };

switch (opciones) {
    case "1":
        seleccionada = SecRapido;
        break;
    case "2":
        seleccionada = SecNormal;
        break;
    case "3":
        seleccionada = SecPesado;
        break;
    case "4":
        seleccionada = SecDelicado;
        break;
    default:
        alert("Opcion no valida, por favor recargue la pagina e intente de nuevo");
        break;

}

alert(`Ha seleccionado el lavado ${seleccionada.nombre}`);

alert(`Lavado ${seleccionada.nombre}\n`
    + `Duracion: ${seleccionada.duracion} minutos\n`
    + `----------------------------------------\n`
    + `Costo: COP$${seleccionada.precio}\n`
);  







