function validacionNombre(nombreGuardado){
    let cantidadIntentos = 3;
    do{
        let nombreIngresado = prompt(`Por favor ingrese su usuario: `)
        
        if (nombreIngresado === nombreGuardado) {
            return true;
        }
        else{
            cantidadIntentos--;
            mensajeIntentos(cantidadIntentos);
        }
    }while(cantidadIntentos > 0);
    return false;
}

function validacionContrasena(contrasenaGuardada){
    let cantidadIntentos = 3;
    do{
        let contrasenaIngresada = prompt(`Por favor ingrese su contraseña: `);
        if (contrasenaIngresada === contrasenaGuardada) {
            return true;
        }else{
            cantidadIntentos--;
            mensajeIntentos(cantidadIntentos);
        }
    }while(cantidadIntentos > 0);
    return false;
}

function mensajeIntentos(cantidadIntentos){
    if (cantidadIntentos > 1){
            console.log(`El usuario o la contraseña ingresada es incorrecta, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentos} intentos`);
        }else if(cantidadIntentos === 1){
            console.log(`El usuario o la contraseña ingresada es incorrecta, por favor intente nuevamente, y recuerde que tiene ${cantidadIntentos} intento`);
        }
        else{
            console.log(`El usuario ha sido bloqueado por agotar la cantidad de intentos`);
        }
}

function validacionCredenciales(usuarioGuardado, contrasenaGuardada){
    
    if (validacionNombre(usuarioGuardado) && validacionContrasena(contrasenaGuardada)) {
        return true;
    }
return false;
}

export {validacionCredenciales};