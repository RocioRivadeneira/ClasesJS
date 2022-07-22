function escribirListaDeProductos(productos) {
    const listaDeProductos = document.getElementById("ListaDeProductos");

    if (productos.length) {
        listaDeProductos.innerHTML = "";

        for (const producto of productos) {
            const contenedorProducto = document.createElement("li");

            contenedorProducto.innerHTML = `
            <h3>ID: ${producto.id}</h3>
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
        `;

            listaDeProductos.append(contenedorProducto);
        }
    } else {
        listaDeProductos.innerHTML = "No se encontró ningún producto";
    }
}

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

escribirListaDeProductos(productos);

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", (event) => {
    event.preventDefault();

    const buscarTexto = event.target.parentElement.texto.value.toLowerCase();

    escribirListaDeProductos(
        productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(buscarTexto)
        )
    );
});
