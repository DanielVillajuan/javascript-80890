export const suma = (primerN, segundoN) => {
    alert(`El resultado es: ${primerN + segundoN}`)
}
export const resta = (primerN, segundoN) => {
    alert(`El resultado es: ${primerN - segundoN}`)
}
export const multiplicacion = (primerN, segundoN) => {
    alert(`El resultado es: ${primerN * segundoN}`)
}
export const division = (primerN, segundoN) => {
    alert(`El resultado es: ${primerN / segundoN}`)
}

export function menuCalculadoraQueRecibe2Parametros(opc, primerN, segundoN){
    switch (opc){
        case 1:
            suma(primerN, segundoN)
            break;
        case 2:
            resta(primerN, segundoN)
            break;
        case 3:
            multiplicacion(primerN, segundoN)
            break;
        case 4:
            division(primerN, segundoN)
            break;
        default:
            alert("No ingreso nada")
            break;
    }
}

// const nombre = prompt("Ingrese nombre")

// SCOPE
// function saludarDeDia (){
//     const nombre = prompt("Ingrese su nombre")
//     console.log("Buenos dias, ", nombre)
//     return nombre
// }

// function saludarDeNoche (){
//     const nombre = prompt("Ingrese su nombre")
//     console.log("Buenas noches, ", nombre)

//     if(nombre !== ''){
//         return nombre
//     }        
// }

// const nombre = saludarDeDia()

// console.log("En las funciones ingreaste,", nombre)


// funciones anonimas

// const mostrarEnPantalla = function (primer, segundo){
//     console.log('Ingreasste:',primer, ' y ', segundo)
// }

// mostrarEnPantalla(2, 3)


// const numero = [2,3,5,21,3,5,2,3,23,5,2]

// numero.forEach(function(){

// })

// Funciones de tipo flecha

const mostrarEnPantalla = (primer, segundo) => {
    console.log('Ingreasste:',primer, ' y ', segundo)
}

// mostrarEnPantalla(2, 5)

// const numero = [2,3,5,21,3,5,2,3,23,5,2]

// numero.forEach(() => {

// })

// Regla 1, retorno implicito
// const suma2 = (primer, segundo) => primer + segundo
// const resta2 = (primer, segundo) => primer - segundo
// const mult2 = (primer, segundo) => primer * segundo
// const div2 = (primer, segundo) => primer / segundo



// const resultado = suma2(5,10)
// console.log(resultado)


// Regla 2, unico parametro

// const mostrarNombre = nombre => {
//     console.log("Buenas dias,", nombre)
// }
