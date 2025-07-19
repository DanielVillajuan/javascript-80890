// let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES')); // parseInt
// let texto = prompt('INGRESE TEXTO A REPETIR');

// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }


// let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         alert("lado");
//     }
// }



// IF - 
// condicion siempre es un booleano
// const edad = parseInt(prompt("Ingrese edad")) // 60
// const condicionSemiAdulto = edad >= 18 && edad < 40 // comparacion -> booleano
// const condicionAdulto = edad >= 40

// if(condicionSemiAdulto){
//     console.log("Buenas sos mayor pero menor a 40")  
// }else if(condicionAdulto) {
//     console.log("Buenas sos mayor a 40")
// } else {
//     console.log('Aun sos muy joven, toma chocolata')
// }


// = asignacion
// comparacion == ===

// valor == valor2
// valor y tipo === valor2 y tipo2


// 2 == '2' // true

// 2 === '2' // false

// ! ==


// <, < =, >, > =

// and (&&)
// or (||)

// !true -> false
// !false -> true



// Switch
// const path = window.location.pathname // "/"

// switch(path){
//     case "/":
//         // funcion que trae toda la informacion necesaria para pintar la pantalla
//         break;
//     case "/perfil":
//         // funcion que trae toda la informacion necesaria para pintar la pantalla
//         break;
//     case "/carrito":
//         // funcion que trae toda la informacion necesaria para pintar la pantalla
//         break;
//     default:
//         // no traigo nada
//         break;
// }

// Guillermo o GUILLERMO o GuiLLermo

// Lautaro -> No te conozco pero pareces buena persona

// GUILLERMO -> No te conozco pero pareces buena persona

// JUAN -> Que haces JUAN? que es de tu vida?


// const username = prompt("Ingrese username:") // juan32

// const usernameBaseDeDatos = 'juan32' // desde la base datos


// if( username === usernameBaseDeDatos){

// }


// Hacer un programa que pregunte al usuario cuantas notas quiere ingresar
// Luego de terminar de pedir las notas, sacar el promedio de la misma

const cantidad = parseInt(prompt("Cuantas notas quiere ingresar?:")); 
let acumulador = 0;

for(let i=0; i < cantidad; i++){ 
    let nota = parseInt(prompt("Ingrese nota"))
    // !nota -> equivalente a hacer -> nota === null || nota <= 0 || Number.isNaN(nota)
    while(!nota){
        nota = parseInt(prompt("Error en la nota, vuelva a ingresar:"))
    }

    acumulador = acumulador + nota
    
    
    // if(nota === null){
    //     const notaVerdadera = parseInt(prompt("Error !Ingrese nota valida"))
    //     acumulador = acumulador + notaVerdadera
    // }else {        
    //     acumulador = acumulador + nota
    // }

}

console.log("El promedio es:", acumulador/cantidad)


// condicion -> true o false
if(null){
 // verdadera
}else {
// falsa
}

// true -> true
// false -> false

// null -> false

// undefined -> false
// 0 -> false
// '' -> false
// NaN -> false
