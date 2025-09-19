let opciones = prompt(`# Selecciona el tipo de problema\n`
        + `1. Facturacion\n`
        + `2. Technical\n`
        + `3. Ventas\n`
        + `4. Quejas\n`
        + `---------------------------------------------------------\n`
        + `Por favor ingrese el numero correspondiente a su seleccion:`
);

//no habia visto la "Ayuda" con los valores 
const SecRapido = { nombre: "Facturacion", mensaje: "Sera redirigido al departamento de Facturacion para problemas en cobros.", contacto: "Correo: facturacion@empresa.com\nTel: 300-111-2222"}; 
const SecNormal = { nombre: "Technical" , mensaje: "Sera redirigido al departamento de Technical Issues para reportar incovenientes con la web.", contacto: "Correo: soporte@empresa.com\nTel: 300-333-4444"}; 
const SecPesado = { nombre: "Ventas"  , mensaje: "Sera redirigido al departamento de Ventas, por favor espere unos minutos", contacto: "Correo: ventas@empresa.com\nTel: 300-555-6666"}; 
const SecDelicado = { nombre: "Quejas"  , mensaje: "Sera redirigido al departamento de Quejas de clientes.", contacto: "Correo: quejas@empresa.com\nTel: 300-777-8888"}; 

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


alert(`Ha seleccionado ${seleccionada.nombre}`);

alert(`Problema Seleccionado: ${seleccionada.nombre}\n`
    + `${seleccionada.mensaje}\n`
    + `----------------------------------------\n`
    + `Informacion de contacto: ${seleccionada.contacto}\n`
);  

