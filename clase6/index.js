// FUNCIONES DE ORDEN SUPERIOR

// const mayorQue = (n) => {
//     return (m) => { return m > n }
// }


// const mayorQue10 = mayorQue(10) // devuelve una fn
// // const mayorQue10 = (m) => { return m > 10 }

// const esMayor = mayorQue10(5)

// console.log({esMayor}) // booleano -> false



// const recorriendoYmostrando = (arr, fn) => {
//     for(let i = 0; i < arr.length; i ++){
//         fn(arr[i])
//     }
// }

// const numeros = [5,2,10,33,512]



// recorriendoYmostrando(numeros, (elem) => {
//     if(elem % 2 === 0){
//         console.log("Es pas -> ", elem)
//     }
// })


// METODOS DE ARRAYS DE ORDEN SUPERIOR


const productos = [
    {
        descripcion: "Arroz",
        precio: 1500, 
        stock: true,
        stockValue: 100, 
        descuento: false, 
        descuentoValue: null,
        activo: true,
        categoria: "Almacen",
    },
    {
        descripcion: "Fideos",
        precio: 800, 
        stock: true,
        stockValue: 50, 
        descuento: true, 
        descuentoValue: 10,
        activo: true,
        categoria: "Almacen",
    },
    {
        descripcion: "Harina",
        precio: 1100, 
        stock: true,
        stockValue: 500, 
        descuento: false, 
        descuentoValue: null,
        activo: true,
        categoria: "Almacen",
    },
    {
        descripcion: "Atun",
        marca: "Ciudad del Lago",
        precio: 2500, 
        stock: true,
        stockValue: 1000, 
        descuento: true, 
        descuentoValue: 5,
        activo: true,
        categoria: "Frio",
    },
    {
        descripcion: "Atun",
        marca: "Marolio",
        precio: 2500, 
        stock: false,
        stockValue: 1000, 
        descuento: true, 
        descuentoValue: 5,
        activo: true,
        categoria: "Frio",
    },
    {
        descripcion: "Aceite",
        precio: 1900, 
        stock: false,
        stockValue: 0, 
        descuento: false, 
        descuentoValue: null,
        categoria: "Almacen"
    }
]

// Foreach - recorre como un for clasico pero mas bonito
// productos.forEach((elem)=> {
//     console.log(elem)
// })

// find busca un valor y lo retorna, si no encuentra retorna undefined

const elementoEncontrado = productos.find((elem)=> { 
    return  elem.descripcion.toLowerCase() === "atun" && elem.marca === 'Marolio' 
})

// console.log(elementoEncontrado)         

// filter - filtra valores que se cumplan
// * siempre devuelve un array

const agrupados =  productos.filter((elem) => elem.descuento && elem.stock) 
// console.log(agrupados)

// some - devuelve un booleano cuando se cumpla la condicion de la funcion

const existeAceite = productos.some((elem) => { return elem.precio >= 3000 })
// console.log(existeAceite)

// map - mapea devuelve un array con lo que haya retornado en cada iteracion

const productosMapeados = productos.map((elem)=> {
    if(elem.marca) {
        return elem
    }

    return {
            ...elem,
            marca: "",
            date: new Date().toISOString()
        }
})

// console.log(productosMapeados)

// REDUCE

const preicoAcumulado = productos.reduce((variableADevolver, elem)=>{
    // 
}, {})


/*

    {
        "Almacen": [{},{},{},{}],
        "Frio": [{},{}],
        "Bebidas": [{}]
    }

*/


console.log(preicoAcumulado)


// Sort -> re ordena un array - mutable 

productos.sort((a, b)=> {
    // -1 va a poner A antes que B
    // 1 va a poner B antes que A
    // 0 no hace nada, los deja como tal

    if(a.precio < b.precio) return -1
    if(b.precio > a.precio) return 1

    if(a.marca < b.marca) return -1
    if(b.marca > a.marca) return 1

    return 0
})

console.log(productos)