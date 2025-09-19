let totalVendidos = 0;
let producto;

while (true) {
    producto = prompt('Ingrese el nombre del producto vendido (escriba "terminar" para finalizar):');
    if (producto.toLowerCase() === "terminar") {
        break;
    }
    let cantidad = Number(prompt(`¿Cuantos "${producto}" se vendieron?`));
    totalVendidos += cantidad;
    alert(`Registro: ${cantidad} "${producto}" vendidos.`);
}

alert(`Resumen del día:\nTotal de productos vendidos: ${totalVendidos}`);