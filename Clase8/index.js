// console.log("Buenos dias")

// function guardandoMemoriaSuma(resultado){
//     localStorage.setItem("ultimaSuma", resultado)
//     console.log("Se guardo el resultado")
// }


// function sumar(x,y){
//     console.log("Estamos sumando")
//     const resultado = x + y
//     guardandoMemoriaSuma(resultado)

//     return resultado

// }


// const respuesta = sumar(2,5)

// console.log(respuesta)




// setTimeout 

// console.log("inicio proceso")

// setTimeout(()=>{
//     console.log("Buenos dias de manera asincrona")
// }, 5000)

// console.log("fin de proceso")


// setInterval
// let i = 0
// const idInterval = setInterval(()=>{
//     i++
//     console.log(i)
//     if(i === 10){
//         clearInterval(idInterval)
//     }
// }, 1000)

// try{
//     // Consultas a una API REST o BBDD
//     // codigo posible error
//     console.log({hola:"hola"}.hola)
//     // cuando algo fatal ocurre lo manda al catch

// } catch (err){
//     console.log("Algo ocurrio, vuelva intentarlo mas tarde!", err)
// } finally {
//     console.log("Soy el finally")
// }

// async - await

// fetch("./data.json")
// .then((resp) => {
//     console.log(resp)
//     return resp.json()
// })
// .then((data) => {
//     console.log(data)
// }).catch(e=> console.log(e))

async function traerInfo(){
    try{

        const respuesta = await fetch("./data.json")
        const data = await respuesta.json()
        
        const userRespuesta = await fetch("./usuarios.json")
        const userData = await userRespuesta.json()

        console.log(data)
        console.log(userData)

        // --------
        // comentario
        // nombre del usuario
        // reputacion del usuario


    } catch (e){
        console.log("Ocurrio algo inesperado",e)
    }
}

traerInfo()

// GET -> TRAER INFORMACION
// PUT -> MODIFICAR UN RECURSO 
// POST -> CREAR UN RECURSO NUEVO
// DELETE -> ELIMINA UN RECURSO