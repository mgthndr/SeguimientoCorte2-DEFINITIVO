const productos = [
    { nombre: "Manzanas", precio: 2000, stock: 10 },
    { nombre: "Pan", precio: 1500, stock: 20 },
    { nombre: "Leche", precio: 3500, stock: 15 },
    { nombre: "Huevos", precio: 500, stock: 30 },
    { nombre: "Carne", precio: 5000, stock: 2 },
    { nombre: "Agua", precio: 200, stock: 5 },
    { nombre: "Aceite", precio: 1500, stock: 30 },
    { nombre: "Vinagre", precio: 1700, stock: 21 },
    { nombre: "Mandarina", precio: 7000, stock: 11 },
    { nombre: "Algo", precio: 50000, stock: 3 }

];

const carrito = [];

function mostrarProductos() {
    let lista = "Productos disponibles:\n";
    productos.forEach((p, i) => {
        lista += `${i + 1}. ${p.nombre} - $${p.precio} (Stock: ${p.stock})\n`;
    });
    alert(lista);
}

function agregarAlCarrito() {
    mostrarProductos();
    let indice = Number(prompt("Ingrese el número del producto que desea agregar:")) - 1;
    if (indice < 0 || indice >= productos.length) {
        alert("Producto no válido.");
        return;
    }
    let cantidad = Number(prompt(`¿Cuántos "${productos[indice].nombre}" desea agregar?`));
    if (cantidad <= 0 || cantidad > productos[indice].stock) {
        alert("Cantidad no válida o insuficiente stock.");
        return;
    }
    
    let enCarrito = carrito.find(item => item.nombre === productos[indice].nombre);
    if (enCarrito) {
        if (enCarrito.cantidad + cantidad > productos[indice].stock) {
            alert("No hay suficiente stock para agregar esa cantidad.");
            return;
        }
        enCarrito.cantidad += cantidad;
    } else {
        carrito.push({
            nombre: productos[indice].nombre,
            precio: productos[indice].precio,
            cantidad: cantidad
        });
    }
    productos[indice].stock -= cantidad;
    alert(`"${productos[indice].nombre}" agregado al carrito.`);
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito esta vacio.");
        return;
    }
    let resumen = "Carrito de compras:\n";
    let total = 0;
    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        resumen += `- ${item.nombre}: ${item.cantidad} x $${item.precio} = $${subtotal}\n`;
        total += subtotal;
    });
    resumen += `\nTOTAL: $${total}`;
    alert(resumen);
}


let salir = false;
do {
    let opcion = prompt(
        "Carrito de Compras\n" +
        "1. Ver productos\n" +
        "2. Agregar producto al carrito\n" +
        "3. Ver carrito y total\n" +
        "4. Salir\n" +
        "Seleccione una opción:"
    );
    switch (opcion) {
        case "1":
            mostrarProductos();
            break;
        case "2":
            agregarAlCarrito();
            break;
        case "3":
            mostrarCarrito();
            break;
        case "4":
            salir = true;
            alert("Gracias por usar el carrito de compras.");
            break;
        default:
            alert("Opcion no valida.");
    }
} while (!salir);