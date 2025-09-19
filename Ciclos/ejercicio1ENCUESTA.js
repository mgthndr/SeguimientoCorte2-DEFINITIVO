let totalSatisfaccion = 0;
let respuestas = []; //conjunto vacio para guardar las respuestas

for (let i = 1; i <= 10; i++) { // ciclo para 10 clientes
    let nivel = prompt(`Cliente ${i}: Cual es su nivel de satisfacción del 1 al 10?`);
    nivel = Number(nivel); //el number convierte lo puesto a variable, asi se evita errores al ponerlos todos juntos
    respuestas.push(nivel); //push: se agrega la variable al conjunto vacio
    totalSatisfaccion += nivel;
    alert(`Respuesta registrada: ${nivel}`);
}

let promedio = totalSatisfaccion / 10; //promedio

alert(
    `Resultados de la encuesta:\n` +
    `Respuestas: ${respuestas.join(", ")}\n` + // el join agarra los diferentes datos de un ciclo for
    `Promedio de satisfacción: ${promedio}` //y los organiza con un separador que pongas
)