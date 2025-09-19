let totalUsuarios = 0;
let atencionLlamada = 0;
let atencionAsesoria = 0;
let asesoriaEstudiante = 0;
let asesoriaDirectivo = 0;
let transferencias = 0;

let continuar = true;

while (continuar) {
    let cedula = prompt("Ingrese el numero de cedula del usuario:");
    let tipoAtencion = prompt(
        "# Seleccione el tipo de atencion:\n" +
        "1. Llamada telefonica\n" +
        "2. Asesoria"
    );

    if (tipoAtencion === "1") {
        atencionLlamada++;
        totalUsuarios++;
        alert("Atención por llamada telefonica registrada.");
    } else if (tipoAtencion === "2") {
        atencionAsesoria++;
        totalUsuarios++;
        let tipoAsesoria = prompt(
            "Tipo de asesoria:\n" +
            "1. Estudiante\n" +
            "2. Directivo"
        );
        if (tipoAsesoria === "1") {
            asesoriaEstudiante++;
            alert("Asesoria a estudiante registrada.");
        } else if (tipoAsesoria === "2") {
            asesoriaDirectivo++;
            alert("Asesoria a directivo registrada.");
        } else {
            alert("Tipo de asesoria no valido.");
        }

        let transferir = prompt("¿Desea transferir la asesoria a llamada telefonica? (si/no)").toLowerCase();
        if (transferir === "si") {
            atencionLlamada++;
            totalUsuarios++;
            transferencias++;
            alert("Transferencia realizada. Atencion por llamada telefonica registrada.");
        }
    } else {
        alert("Tipo de atencion no valido.");
    }

    continuar = prompt("Desea registrar otra atención? (si/no)").toLowerCase() === "si";
}

alert(
    "ESTADISTICAS DE ATENCION UNIVERSIDAD\n" +
    `Total usuarios atendidos: ${totalUsuarios}\n` +
    `- Llamada telefonica: ${atencionLlamada}\n` +
    `- Asesoria: ${atencionAsesoria}\n` +
    `   - Estudiantes: ${asesoriaEstudiante}\n` +
    `   - Directivos: ${asesoriaDirectivo}\n` +
    `Transferencias de asesoria a llamada: ${transferencias}`
);