let express = require("express")
let router = express.Router()
let operacionesController = require("../controllers/operaciones.controller")


router.post("/", (req,res)=>{
    let { body } = req
    let operacionesRes = operacionesController(body)

    if (!operacionesController){
        return res.status(204).json({"messaje": 'no hay nada amigo'})
    } 
    return res.status(201).json(operacionesRes)
    
})


module.exports = router