function calculoDeCuotas(precio, cuotas) {
    return precio / cuotas;
}

let precio = 0;
let cuotas = 1;
let precioEnCuotas = 0;

precio = Number(prompt("Ingrese el precio del producto."));
cuotas = Number(prompt("En cuantas cuotas quiere pagar?"));

precioEnCuotas = calculoDeCuotas(precio, cuotas);

alert(
    `El precio a pagar en ${cuotas} cuotas es de: $${precioEnCuotas}. Precio final: $${precio}`
);
