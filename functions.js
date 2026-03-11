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

export {validacionNombre, validacionContrasena};