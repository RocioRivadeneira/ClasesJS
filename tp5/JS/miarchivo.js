const productos = [
    { id: 1, nombre: "Mesa", precio: 20000 },
    { id: 2, nombre: "Cama", precio: 23000 },
    { id: 3, nombre: "Parrilla", precio: 45000 },
    { id: 4, nombre: "Juego de sillones", precio: 60000 },
    { id: 5, nombre: "Ropero", precio: 38000 },
    { id: 6, nombre: "Esquinero", precio: 15000 },
    { id: 7, nombre: "Marcos de fotos", precio: 30000 },
    { id: 8, nombre: "Cajonera", precio: 39000 },
];

let productoMin = productos[0];

for (const producto of productos) {
    if (producto.precio < productoMin.precio) {
        productoMin = producto;
    }
}

const precioDesde = Number(
    prompt(
        `Listar productos con precio desde: (Valor mínimo: ${productoMin.precio})`
    )
);

const spanTitulo = document.getElementById("PrecioMinimo");

spanTitulo.innerText = precioDesde;

const productosFiltrados = productos.filter(
    (producto) => precioDesde <= producto.precio
);

const listaProductos = document.getElementById("ListaProductos");

for (const producto of productosFiltrados) {
    let contenedorProducto = document.createElement("li");

    contenedorProducto.innerHTML = `<h3> ID: ${producto.id} </h3>
                        <p> Producto: ${producto.nombre} </p>
                        <p> Precio:$${producto.precio}</p>`;

    listaProductos.append(contenedorProducto);
}
