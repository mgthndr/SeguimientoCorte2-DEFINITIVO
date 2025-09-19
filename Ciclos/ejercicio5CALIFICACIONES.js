let totalSatisfaccion = 0;
let respuestas = []; //conjunto vacio para guardar las respuestas

const asignaturas = prompt("Ingrese el numero de asignaturas:");

for (let i = 1; i <= asignaturas; i++) { // ciclo para 10 clientes
    let nivel = prompt(` ${i}º Calificacion: Registra tu nota total de esta asignatura: `);
    nivel = Number(nivel); //el number convierte lo puesto a variable, asi se evita errores al ponerlos todos juntos
    respuestas.push(nivel); //push: se agrega la variable al conjunto vacio
    totalSatisfaccion += nivel;
    alert(`Respuesta registrada: ${nivel}`);
}

let promedio = totalSatisfaccion / asignaturas; //promedio

alert(
    `# SISTEMA DE NOTAS\n` +
    `Notas registradas: ${respuestas.join(", ")}\n` + // el join agarra los diferentes datos de un ciclo for
    `Promedio: ${promedio}` //y los organiza con un separador que pongas
)