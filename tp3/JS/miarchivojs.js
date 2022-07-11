class Producto {
    static impuesto_IVA = 1.21;

    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
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

for (const producto of productos) {
    console.log(`${producto.nombre}: $${producto.precioConIVA()}`);
}
