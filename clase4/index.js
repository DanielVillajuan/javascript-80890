// Arrays 

const miArray = [true, 2, "Hola"] // los indices arrancan desde 0.

miArray[0] // true
miArray[1] // 2
miArray[2] // "Hola"

miArray.length // me devuelve la cantidad de elementos

// for(let i=0; i < miArray.length; i++){
//     console.log(miArray[i]);
// }

// METODOS SIMPLES DE UN ARRAY 

// PUSH - agregar al final del array un elemento (pasado por parametro)

miArray.push("Molinari")

console.log(miArray) // [true, 2, "Hola","Molinari"]

// UNSHIFT - agrega al inicio del array

miArray.unshift("Verónica")

console.log(miArray) // ["Verónica",true, 2, "Hola","Molinari"]

// POP - Elimina el ultimo elemento del array

const ultimoEliminado = miArray.pop()
console.log(miArray) // ["Verónica",true, 2, "Hola"]
console.log(ultimoEliminado) // "Molinari"

// SHIFT - Elimina el primer elemento del array

miArray.shift()
console.log(miArray) // [true, 2, "Hola"]

// JOIN 
const nombres = ["Daniel", "Pedro","Veronica", "Julio", "Emilio"]

const nombresJoins = nombres.join(", ") 

console.log(nombresJoins) // "Daniel - Pedro - Veronica - Julio - Emilio"

// IndexOf
const julioIndex = nombres.indexOf('Julio') // 3
const emilioIndex = nombres.indexOf('Emilio') // 4
const fulanoIndex = nombres.indexOf("Fulano") // -1
if(fulanoIndex < 0){
    console.log("no se encontro el elemento")
}

// Includes - devuelve un booleano si el elemento existe o no.

const existeFulanito = nombres.includes("Fulanito") // false

if(!existeFulanito){
    console.log("No se encontro al elemento")
}

// SORT - es mutable

// nombres.sort() // asc

console.log(nombres)

// Reverse - da vuelta un array

// nombres.reverse() // desc

// slice - copia un array a travez de sus indices , desde y hasta sin incluirlo

const nuevoArrayNombres = nombres.slice(2,4)
nuevoArrayNombres[2] = "Pepe"
console.log("-----> nombres despues de la copia", nombres)

// splice - permite eliminar elementos e insertar en su lugar
// inicio, cantidad de eliminado, insertar.

nombres.splice(2,2,"Jose")
console.log(nombres)


// OBJETOS - literales
// son la representacion del mundo real dentro del codigo

const auto = {
    // clases y valores
    marca: "Renault",
    modelo: "Sandero",
    anio: 2015,
    motor: "Renault inc",
    color: ["Rojo","Gris","Negro","Blanco"],
    version: ["base","confort","full"],
    puertas: [5,3],
    origen: {
        pais: "Francia",
        provincia: "Tolousse"
    },
    llantas: "base",
    fechaIngreso: "10/10/2010",
    fecha: {
        dia: "20",
        mes:"julio",
        anio:"2025"
    }
}

auto.motor // "Renault inc"
auto.anio // 2015
auto.origen.provincia // Tolousse
auto.color[2] // Negro

auto.fechaIngreso // undefined
auto.fecha.dia // undefined.undefined -> rompe la aplicacion, pantalla en blanco

auto.fechaIngreso = "20/08/2024"
auto.fechaIngreso // 20/08/2024


// const origen = 'origen'
// auto[origen]["provincia"] // Tolousse


// function accederElementoAuto (objeto, clave){
//     return objeto[clave]
// }

// Destructuring 
const dia = "02"

const { dia: diaAuto , mes, anio } = auto.fecha

const fechaValida = diaAuto + mes + anio 


// Spread ...

const segundoAuto = {
    ...auto,
    marca: "Citroen",
    fecha: {
        dia: "10",
        mes: "Agosto",
        anio: "2020"
    },
    numeroRueda: 4
}

console.log("segundo Auto", segundoAuto)


const usuarioSinModificar = {
    nombre :"Fulano",
    apellido :"Tal",
    edad: 20
}


usuarioSinModificar.nombre = "Fulan"

const usuarioMoficado = {
    usuarioSinModificar,
    nombre: "Fulan",
}


// EJEMPLO REAL

const alumnos = [
    {nombre: "Pedro",edad: 19, apellido: "Berez"},
    {nombre: "Ricardo",edad: 22, apellido: "Aleman"},
    {nombre: "Jose",edad: 31, apellido: "Molinari"},
    {nombre: "Mario",edad: 18, apellido: "Villajuan"},
    {nombre: "Nicole",edad: 23, apellido: "Mendez"},
] // esto vendria de la base de datos

const alumnosConNota = []

for(let i=0; i < alumnos.length; i++){
    const nota = parseInt(prompt("Ingrese nota de alumno:" + alumnos[i].nombre))
    const alumnoConNota = {
        ...alumnos[i],        
        nota: nota
    }
    alumnosConNota.push(alumnoConNota)
}

console.log(alumnosConNota)

// alumnosConNota se mandaria a la base de datos
