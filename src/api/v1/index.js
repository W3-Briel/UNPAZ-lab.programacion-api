const express = require("express")
const APP = express()

const routerOperaciones = require("./routers/operaciones/index")

/**
 * puerto donde escuchara el servidor web
 * @type {number}
*/
const PORT = 3000

APP.use(express.json())
APP.use("/operaciones",routerOperaciones)

APP.listen(PORT,(e)=>{
    if (!e) return console.log(`Servidor escuchando el puerto: ${PORT}`)
    
    console.log(`error al escuchar el puerto ${PORT}`)
})