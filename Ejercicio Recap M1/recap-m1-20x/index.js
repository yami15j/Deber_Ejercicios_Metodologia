"use strict"
let calcIva = (precio) => {
    let iva = precio * 0.12;
    let total = precio + iva;
    return total;
} 
let inprecio = Number(prompt("Ingrese un precio"));
let preciofinal = calcIva(inprecio);

alert (`El precio final es: ${preciofinal}`)