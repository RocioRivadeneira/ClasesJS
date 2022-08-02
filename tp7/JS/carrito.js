function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || {};
}

function eliminarDelCarrito(id) {
    // Destructuring + spread para eliminar un ID del carrito.
    const { [id]: eliminado = null, ...carrito } = obtenerCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));

    eliminado && Swal.fire(`Eliminaste "${eliminado.nombre}" de tu carrito.`);

    escribirCarrito();
}

function escribirCarrito() {
    const carrito = obtenerCarrito();

    const idDeProductos = Object.keys(carrito);

    const contenedorDeCarrito = document.getElementById("Carrito");

    contenedorDeCarrito.innerHTML = "";

    if (idDeProductos.length > 0) {
        for (const idDeProducto of idDeProductos) {
            const producto = carrito[idDeProducto];
            const contenedorDeProducto = document.createElement("li");

            contenedorDeProducto.innerHTML = `
                <h3>ID: ${producto.id}</h3>
                <p>Producto: ${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
            `;
            const boton = document.createElement("button");

            boton.innerText = "Eliminar del carrito";

            contenedorDeProducto.append(boton);

            boton.addEventListener("click", () =>
                eliminarDelCarrito(producto.id)
            );

            contenedorDeCarrito.appendChild(contenedorDeProducto);
        }
    }
}

escribirCarrito();
