import {validacionCredenciales } from "./functions.js";

const usuarioGuardado = "Scath";
const contrasenaGuardada = "Pepadeaguacate";

const cantidadIntentos = validacionCredenciales(usuarioGuardado, contrasenaGuardada);

if (cantidadIntentos != 0) {
    console.log(`Bienvenido al sistema 😊`);
}