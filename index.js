var CryptoJS = require("crypto-js");
var { encriptar } = require('./libreria-propia');

// Leer los argumentos de la linea de comandos 
const argumentos = process.argv;

// Encrypt por el método Cryto
var ciphertext = CryptoJS.AES.encrypt(argumentos[2], 'secret key 123').toString();
 
// Encriptar por la librería propia 
const encriptado2 = encriptar(argumentos[2]);

console.log(encriptado2);
// console.log(ciphertext);

