const contraseñaCorrecta = "4334";
let intentos = 0;
let accesoConcedido = false;

const patron = /^[C]\d{10}$/;

let cedula;
do {
cedula = prompt("Ingrese su cedula con una C al principio:\n" +
  "CXXXXXXXXXX"
);
  if (!patron.test(cedula)) {
    alert(`Cedula invalida/No reconocida. Por favor verifique e intente nuevamente.` );
  }
} while (!patron.test(cedula));

do {
    let contraseñaIngresada = prompt("Ingrese su clave PIN (4 digitos)");

    if (contraseñaIngresada === contraseñaCorrecta) { //si es igual
        accesoConcedido = true;
        alert("Acceso concedido, bienvenido");

    } else if (intentos < 3) {
        intentos++;
        alert(`Contraseña incorrecta. Intento ${intentos} de 3.`);
    }
} while (!accesoConcedido && intentos < 3);

if (!accesoConcedido) {
    alert("Acceso bloqueado. Ha superado el numero maximo de intentos. Pruebelo mas tarde");
}

let opciones;
let tipod = "Sin seleccionar";
let monto;

if (accesoConcedido == true){
    let opciones = prompt(`# Bienvenido ${cedula}. Que desea realizar?\n`
        + `1. Retiro de efectivo\n`
        + `2. Depositar efectivo\n`
        + `3. Transferencia\n`
        + `4. Consultar saldo de la cuenta\n`
        + `---------------------------------------------------------\n`
        + `Por favor ingrese el numero correspondiente a su seleccion:`
    );
    
    switch (opciones) {
    case "1":
        tipod = "Retiro";
        do{
            monto = prompt("Ingrese el monto a retirar")
        } while (monto % 50000 == 0)
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
}
