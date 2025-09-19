let semana = 1;
let ahorroTotal = 0;

while (semana <= 4) {
    let aporte = prompt(`Ingrese el aporte de la semana ${semana}:`);
    aporte = Number(aporte);
    ahorroTotal += aporte;
    semana++;
}

alert(`El ahorro acumulado despues de 4 semanas es: ${ahorroTotal}`);