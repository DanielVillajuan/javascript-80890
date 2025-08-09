// Funcions constructoras

// function Persona(nombre, apellido, edad, dni){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.dni = dni || "1111111"

//     this.caminar = () => {
//         console.log("Estoy caminando")
//     }
// }

// const persona1 = new Persona("Daniel","Villa", 29, "55555555")
// persona1.nombre = "Pepito"

// const persona2 = new Persona("Lucas","Pirelli", 19, "52322222")

// console.log(persona2.nombre) // Lucas

class Persona {
    constructor(nombre, apellido, edad, dni){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.dni = dni
    }

    hablar(){
        console.log("Estoy hablando y mi nombre es:", this.nombre)
    }
}


const persona1 = new Persona("Daniel", "Villa",29, "49824832")

const ivas = {
    "URU": 1.18,
    "BR": 1.21,
    "ARG": 1.21
}

// class Producto {
//     constructor(nombre, descripcion, titulo, precio,stock = 100){
//         this.nombre = nombre
//     }

//     calcularIVA(locale){
//         this.precio = this.precio * ivas[locale]
//         return this.precio
//     }
// }


// Storages


// Localstorage
// Sessionstorage

// valores primitivos

localStorage.setItem("clave1", "dani")
localStorage.setItem("clave2", 20)
localStorage.setItem("clave3", true)

const clave1 = localStorage.getItem("clave1")
// console.log(clave1)
const clave2 = localStorage.getItem("clave2")
// console.log(clave2)
const clave3 = localStorage.getItem("clave3")
// console.log(clave3)


// objetos y arrays

// JSON 

const modoDarkString = JSON.stringify({ modo: "dark" })
// console.log(modoDarkString)
localStorage.setItem("modo", modoDarkString)

const modoDarkStringLocalstorage = localStorage.getItem("modo")
// console.log(modoDarkStringLocalstorage)

const modoDark = JSON.parse(modoDarkStringLocalstorage)
// console.log(modoDark)

const carritoLocalstorage = JSON.parse(localStorage.getItem("carrito"))
const carrito = carritoLocalstorage || []
const productos = []

class Producto {
    constructor(descripcion, precio, stock){
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
    }
}
function cargarProductos(productos){
    const producto1 = new Producto("Arroz", 800, 10)
    const producto2 = new Producto("Fideos", 1000, 20)
    const producto3 = new Producto("Harina", 500, 15)
    productos.push(producto1,producto2,producto3)
}
cargarProductos(productos)
let msg = `
    Selecciona un producto o ESC para salir:\n
`
for(let i=0; i < productos.length; i++){
    msg+= `${i+1} ${productos[i].descripcion} $${productos[i].precio}\n`
}

let opc = prompt(msg)
while(opc !== "ESC"){
    const opcParsed = parseInt(opc)
    const productoSeleccionado = productos[opcParsed - 1]
    carrito.push(productoSeleccionado)

    opc = prompt(msg)
}

localStorage.setItem("carrito",JSON.stringify(carrito))
console.log(carrito)
