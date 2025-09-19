const contraseñaCorrecta = "dgh*#H1JaD02*/9AswfrEUuhgf9#28dgdy19Sghd**";
let intentos = 0;
let accesoConcedido = false;

do {
    let contraseñaIngresada = prompt("Ingrese la contraseña:");

    if (contraseñaIngresada === contraseñaCorrecta) { //si es igual
        accesoConcedido = true;
        alert("Acceso concedido.");
    } else if (intentos < 3) {
        intentos++;
        alert(`Contraseña incorrecta. Intento ${intentos} de 3.`);
    }
} while (!accesoConcedido && intentos < 3);

if (!accesoConcedido) {
    alert("Acceso bloqueado. Ha superado el numero maximo de intentos.");
}