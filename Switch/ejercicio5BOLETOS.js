let opciones = prompt(`# Bienvenido a la boleteria, cual boleto desea consultar\n`
        + `1. General\n`
        + `2. Niño\n`
        + `3. VIP\n`
        + `4. Platinum\n`
        + `---------------------------------------------------------\n`
        + `Por favor ingrese el numero correspondiente a su seleccion:`
);

//ya es la cuarta vez que copy paste este codigo, es muy bueno y organizado
const SecRapido = { nombre: "General", precio: "10,000", mensaje: "Boleto General, acceso a todas las funciones basicas."}; 
const SecNormal = { nombre: "Para Niños" , precio: "7,500",mensaje:"Boleto para niños menores de 12 años, acceso a todas las funciones basicas."}; 
const SecPesado = { nombre: "VIP"  , precio: "50,000" , mensaje: "Boleto VIP, acceso a todas las funciones basicas mas acceso a la zona VIP y bebidas/comidas gratis."}; 
const SecDelicado = { nombre: "Platinum"  , mensaje: "100,000", mensaje: "Boleto Platinum, acceso a todas las funciones basicas mas acceso a la zona VIP, bebidas/comidas gratis y un tour por las instalaciones."}; 

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


alert(`Ha seleccionado un Boleto ${seleccionada.nombre}`);

alert(`Boleto Seleccionado: ${seleccionada.nombre}\n`
    + `Costo del boleto: COP$${seleccionada.precio}\n`
    + `----------------------------------------\n`
    + `Este boleto tiene los siguientes beneficios: ${seleccionada.mensaje}\n`
);  

