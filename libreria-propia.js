const encriptar = (texto) => {
    let encriptado = '';

    for (let i = 0; i < texto.length; i++){
        encriptado += buscarLetra(texto[i]);
    }

    return encriptado;
}

const buscarLetra = (letra) => {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZAabcdefghijklmnopqrstuvwxyza";
    const letraEncontrada = abc.indexOf(letra);
    const letraEncriptada = abc.charAt(letraEncontrada+1);

    return letraEncriptada;
}

module.exports = {encriptar};