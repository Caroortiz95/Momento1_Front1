let esCorrecto = false;

function validacionNombre(nombreGuardado, nombreIngresado){
    esCorrecto = false;
    if (nombreIngresado === nombreGuardado) {
        esCorrecto = true;
    }
    return esCorrecto;
}

function validacionContrasena(contrasenaGuardada, contrasenaIngresada){
    esCorrecto = false;
    if (contrasenaIngresada === contrasenaGuardada) {
        esCorrecto = true;
    }
    return esCorrecto;
}

function mensajeIntentos(cantidadIntentos){
    if (cantidadIntentos > 1){
            console.log(`El usuario ingresado es incorrecto, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentos} intentos`);
        }else if(cantidadIntentos === 1){
            console.log(`El usuario ingresado es incorrecto, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentos} intento`);
        }
        else{
            console.log(`El usuario ha sido bloqueado por agotar la cantidad de intentos`);
        }
}

function validacionCredenciales(usuarioGuardado, contrasenaGuardada){
    let cantidadIntentos = 3;
    do{
    let usuarioIngresado = prompt(`Por favor ingrese su usuario: `)
    if (validacionNombre(usuarioGuardado, usuarioIngresado) === true) {
        do{
            let contrasenaIngresada = prompt(`Por favor ingrese su contraseña: `)
        if (validacionContrasena(contrasenaGuardada, contrasenaIngresada) === true) {
            break;
        }else{
            cantidadIntentos--;
            mensajeIntentos(cantidadIntentos);
        }
        }while(cantidadIntentos > 0);
        break;
    }else{
        cantidadIntentos--;
        mensajeIntentos(cantidadIntentos);
    }
}while(cantidadIntentos > 0);

return cantidadIntentos;
}

export {validacionCredenciales};