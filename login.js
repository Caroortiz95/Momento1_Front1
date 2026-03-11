import {validacionCredenciales } from "./functions.js";

const usuarioGuardado = "Scath";
const contrasenaGuardada = "Pepadeaguacate";

if (validacionCredenciales(usuarioGuardado, contrasenaGuardada)) {
    console.log(`Bienvenido al sistema 😊`);
}
