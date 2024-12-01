"use strict"
let cuenta = confirm("¿Tiene una cuenta?");
let contraseña = confirm("¿Conoce la contraseña?");

if (cuenta && contraseña == true) {
    alert("Acceso concedido")
} else {
    alert("Acceso denegado")
}