// Clase 7

// const divContainer = document.getElementById("card-container")
// console.log(divContainer.innerHTML)

// divContainer.innerHTML = "<span>Soy un string cambiado desde js</span>"

// const productos = document.getElementsByClassName("card")

// for(let i=0; i<productos.length; i++){
    
//     if(!productos[i].classList.contains("fondo-naranja")){
//         console.log(productos[i],'este no tiene naranja')
//         productos[i].classList.remove("fondo-green")
//         productos[i].classList.add("fondo-naranja")
//     }

//     console.log(productos[i])
// }

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


// const app = document.getElementById("app")

// productos.forEach((producto) => {
//     const divContainer = document.createElement("div") // <div></div>
//     const descripcionElem = document.createElement("h2") // <h2></h2>
//     const precioElem = document.createElement("p") // <p></p>

//     descripcionElem.innerText = "Producto: " + producto.descripcion
//     // <h2>Producto: Arroz</h2>

//     precioElem.innerText = "Precio: $" +producto.precio
//     // <p>Precio: $ 2132</p>

//     divContainer.append(descripcionElem)
//     // <div>
//     //        <h2>Producto: ${producto.descripcion} </h2>
//     // </div>
//     divContainer.appendChild(precioElem)
//     // 
//     //     <div>
//     //         <h2>Producto: ${producto.descripcion} </h2>
//     //         <p>Precio: $${producto.precio} </p>
//     //     </div>
//     // 
//     app.appendChild(divContainer)
// })


// EVENTOS

const BBDD = [
    {
        username: "daniel123",
        password: "123",
    },
    {
        username: "pedrocrack23",
        password: "1235123",
    },
    {
        username: "c98",
        password: "1245423123213",
    }
]

const userLogin = {}

const inputs = document.querySelectorAll("input")
const iniciarSesionBoton = document.querySelector("#iniciar-sesion")

inputs.forEach((input) => {
    input.addEventListener("input",(e) => {
        // e.target contiene toda la info del elemento value, classlit, classname, name, id... etc
        const { value, name } = e.target // e.target.value
        userLogin[name] = value
    })
})

// usuarioElem.addEventListener("input", (event) => {
//     userLogin.usuario = event.target.value
//     console.log(event.target.value)
// })

// passwordElem.addEventListener("input", (event) => {
//     userLogin.password = event.target.value
//     console.log(event.target.value)
// })

iniciarSesionBoton.addEventListener("click",() => {
    if((userLogin.confirmPassword !== userLogin.password) || !userLogin.usuario){
        console.log("No podes loguearte hay algo mal")
    }

    const userFinded = BBDD.find(
        user => user.username === userLogin.usuario && user.password === userLogin.password
    )

    if(!userFinded){
        console.log("crear cuenta")
    }

    const app = document.querySelector("#app")
    app.innerHTML = ''

    app.innerHTML = '<h2>Bienvenido ' + userFinded.username + "</h2>"
})