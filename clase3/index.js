// Hacer un programa que sea una calculadora con las operaciones basicas
// suma, resta, mult, div, siempre entre 2 numeros.
import * as funciones from './operaciones.js'

let opc = parseInt(prompt(`Ingrese numero de operacion: \n
        1- Suma 
        2- Resta 
        3- Multiplicación 
        4- División 
    `))
while(!opc || opc < 1 || opc > 4 ){
    opc = parseInt(prompt(` *** EERRORRRRR *** 
        No ingresaste nada.
        
        Ingrese numero de operacion: \n
        1- Suma 
        2- Resta 
        3- Multiplicación 
        4- División 
    `))
}

const primerN = parseFloat(prompt("Ingrese el primer numero"))
const segundoN = parseFloat(prompt("Ingrese el segundo numero"))

funciones.menuCalculadoraQueRecibe2Parametros(opc, primerN, segundoN)

