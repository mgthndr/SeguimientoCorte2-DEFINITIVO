let nivel ;
do {
    nivel = parseInt(prompt("Ingrese su nivel actual (1-5):"))
} while (nivel < 1 || nivel > 5);
nivel = (nivel)

//generador de xp nomas por aburrimiento, para hacer mas bonita la alert
function generarCodigo() {
  const experiencia = Math.floor(Math.random() * 930) + 100;
    return experiencia;
}


let mensaje ;
switch (nivel) { //se podria hacer con menos lineas haciendo variable el objeto
    case 1:
        mensaje = `Nivel Actual: ${nivel}\n`
        + `Experiencia Actual: ${generarCodigo()}/1,200 XP\n`
        + `Eres apenas un principiante.\n`
        + `Sigue subiendo de nivel para desbloquear nuevas recompensas.`
        break;
     case 2:
        mensaje = `Nivel Actual: ${nivel}\n`
        + `Experiencia Actual: ${generarCodigo()}/5,000 XP\n`
        + `Has avanzado, has desbloqueado Espada de Hierro.\n`
        + `Sigue subiendo de nivel para desbloquear nuevas recompensas.`
        break;
     case 3:
        mensaje = `Nivel Actual: ${nivel}\n`
        + `Experiencia Actual: ${generarCodigo()}/7,500 XP\n`
        + `Has avanzado, has desbloqueado Espada de Oro.\n`
        + `Sigue subiendo de nivel para desbloquear nuevas recompensas.`
        break;
    case 4:
        mensaje = `Nivel Actual: ${nivel}\n`
        + `Experiencia Actual: ${generarCodigo()}/28,300 XP\n`
        + `Has avanzado, has desbloqueado Espada de Diamante.\n`
        + `Sigue subiendo de nivel para desbloquear nuevas recompensas.`
        break;
    case 5:
        mensaje = `Nivel Actual: ${nivel}\n`
        + `Experiencia Actual: ${generarCodigo()}/170,000 XP\n`
        + `Has avanzado, has desbloqueado Espada de Obsidiana.\n`
        + `Sigue subiendo de nivel para desbloquear nuevas recompensas.`
        break;
}
   

alert(mensaje)