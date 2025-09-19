let saldo = 1000; // Saldo inicial
let opcion;

do {
    opcion = prompt(
        "# Bienvenido al cajero automatico\n" +
        "1. Consultar saldo\n" +
        "2. Depositar dinero\n" +
        "3. Retirar dinero\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );

    switch (opcion) {
        case "1":
            alert(`Su saldo actual es: $${saldo}`);
            break;
        case "2":
            let deposito = Number(prompt("Ingrese la cantidad a depositar:"));
            if (deposito > 0) {
                saldo += deposito;
                alert(`Deposito exitoso. Nuevo saldo: $${saldo}`);
            } else {
                alert("Cantidad invalida.");
            }
            break;
        case "3":
            let retiro = Number(prompt("Ingrese la cantidad a retirar:"));
            if (retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
            } else if (retiro > saldo) {
                alert("Fondos insuficientes.");
            } else {
                alert("Cantidad inválida.");
            }
            break;
        case "4":
            alert("Gracias por usar el cajero automático.");
            break;
        default:
            alert("Opcion no valida.");
    }
} while (opcion !== "4");