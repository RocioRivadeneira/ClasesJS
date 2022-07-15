class Producto {
    static impuesto_IVA = 1.21;

    constructor(nombre, precio) {
        this.nombre = nombre[0].toUpperCase() + nombre.slice(1);
        this.precio = parseFloat(precio);
    }

    precioConIVA() {
        return this.precio * Producto.impuesto_IVA;
    }
}

const productos = [];

productos.push(new Producto("Mesa", 20000));
productos.push(new Producto("Cama", 24000));
productos.push(new Producto("Parrilla", 50000));
productos.push(new Producto("Juego de sillones", 45000));
productos.push(new Producto("Ropero", 30000));
productos.push(new Producto("Esquinero", 3500));
productos.push(new Producto("Marcos de fotos", 1500));
productos.push(new Producto("Cajonera", 23000));

const precioDesde = Number(prompt("Buscar muebles con precio desde: ($)"));

const productosDesde = productos.filter(
    (producto) => producto.precioConIVA() >= precioDesde
);

let listadoDeProductos = "";

if (productosDesde.length > 0) {
    productosDesde.forEach((producto) => {
        listadoDeProductos +=
            `Producto: ${producto.nombre}, ` +
            `precio: $${producto.precioConIVA()}  (IVA incluido)\n`;
    });
} else {
    listadoDeProductos = "No existen productos dentro del rango especificado.";
}

alert(listadoDeProductos);

const busqueda = prompt("Buscar producto por nombre:");

const productoFiltrado = productos.find(
    (producto) => producto.nombre.toLowerCase() === busqueda.toLowerCase()
);

if (productoFiltrado) {
    alert(
        `Producto: ${productoFiltrado.nombre}, ` +
            `precio: $${productoFiltrado.precioConIVA()}`
    );
} else {
    alert(`No se encontró ningún producto: ${busqueda}`);
}
