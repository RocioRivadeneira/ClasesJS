function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || {};
}

function obtenerTotal() {
    return Object.values(obtenerCarrito()).reduce(
        (total, { precio }) => (total += precio),
        0
    );
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();

    carrito[producto.id] = producto;

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarDelCarrito(producto) {
    // Destructuring + spread para eliminar un ID del carrito.
    const { [producto.id]: eliminado = null, ...carrito } = obtenerCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
}
