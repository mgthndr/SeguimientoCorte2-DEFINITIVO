let totalSatisfaccion = 0;
let respuestas = ["Lunes: ","Martes: ","Miercoles: ","Jueves: ","Viernes: ","Sabado: ","Domingo: "]; //conjunto vacio para guardar las respuestas
let temperaturas = []; 

for (let i = 0; i < 7; i++) { 
    let nivel = prompt(` ${i+1}º Temperatura: Registra cual es la temperatura maxima del ${i+1}º dia de la semana (en °C):`);
    nivel = Number(nivel); 
    respuestas[i] += nivel; 
    totalSatisfaccion += nivel; //gracias al [i] se guarda cada respuesta en su respectivo lugar
    temperaturas.push(nivel);
    alert(`Respuesta registrada: ${nivel}`);
}

let promedio = totalSatisfaccion /7; //promedio

//quiero pensar q habia una forma mas optima para hacer esto
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let indiceMax = temperaturas.indexOf(Math.max(...temperaturas));
let indiceMin = temperaturas.indexOf(Math.min(...temperaturas));
let diaMax = dias[indiceMax];
let diaMin = dias[indiceMin];

alert(
    `# REGISTRO DE TEMPERATURAS\n` +
    `Respuestas: ${respuestas.join(", ")}\n` 
    + `---------------------------------------------------------\n`
    + `Dia mas caluroso: ${diaMax}\n` 
    + `Dia mas frio: ${diaMin}\n` 
    + `Promedio de Temperaturas: ${promedio}` 
)