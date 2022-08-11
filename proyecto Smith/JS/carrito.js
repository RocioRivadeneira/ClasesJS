async function eliminarProducto(producto) {
    const resultado = await Swal.fire({
        title: `¿Estás seguro de que deseas eliminar "${producto.nombre}" de tu carrito?`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar producto",
        cancelButtonText: `Cancelar`,
    });

    if (resultado.isConfirmed) {
        eliminarDelCarrito(producto);

        dibujarCarrito();
        dibujarTotal();
    }
}

function dibujarCarrito() {
    const productos = Object.values(obtenerCarrito());

    const contenedorDeCarrito = document.getElementById("Carrito");

    contenedorDeCarrito.innerHTML = "";

    for (const producto of productos) {
        const contenedorDeProducto = document.createElement("tr");

        contenedorDeProducto.innerHTML = `
            <td><img src="../${producto.imagen.src}"  class="img-thumbnail w-50" alt="${producto.imagen.alt}" /></td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>`;
        const boton = document.createElement("button");

        boton.innerText = "Eliminar del carrito";

        contenedorDeProducto.append(boton);

        boton.addEventListener("click", () => eliminarProducto(producto));

        contenedorDeCarrito.appendChild(contenedorDeProducto);
    }
}

function dibujarTotal() {
    document.getElementById("total").innerText = obtenerTotal();
}

document
    .getElementById("FinalizarCompra")
    .addEventListener("click", async () => {
        await Swal.fire(`Compra por $${obtenerTotal()} finalizada!`);

        vaciarCarrito();

        dibujarCarrito();
        dibujarTotal();
    });

dibujarCarrito();
dibujarTotal();
