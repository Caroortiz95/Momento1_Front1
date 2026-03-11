import { validacionNombre, validacionContrasena } from "./functions.js";

const usuarioGuardado = "Scath";
const contrasenaGuardada = "Pepadeaguacate";
let cantidadIntentoss = 3;

do{
    let usuarioIngresado = prompt(`Por favor ingrese su usuario: `)
    if (validacionNombre(usuarioGuardado, usuarioIngresado) === true) {
        let contrasenaIngresada = prompt(`Por favor ingrese su contraseña: `)
        if (validacionContrasena(contrasenaGuardada, contrasenaIngresada) === true) {
            break;
        }else{
            cantidadIntentoss--;
            console.log(`La contraseña ingresada es incorrecta, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentoss} intentos`);
        }
    }else{
        cantidadIntentoss--;
        if (cantidadIntentoss > 1){
            console.log(`El usuario ingresado es incorrecto, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentoss} intentos`);
        }else if(cantidadIntentoss === 1){
            console.log(`El usuario ingresado es incorrecto, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentoss} intento`);
        }
        else{
            console.log(`El usuario ha sido bloqueado por agotar la cantidad de intentos`);
        }
        
    }
}while(cantidadIntentoss > 0);

if (cantidadIntentoss != 0) {
    console.log(`Bienvenido al sistema 😊`);
}