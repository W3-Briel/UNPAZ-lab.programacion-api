let express = require("express")
let router = express.Router()
let operacionesController = require("../controllers/operaciones.controller")


router.post("/", (req,res)=>{
    let { body } = req

    try {
        let operacionesRes = operacionesController(body)
            if (!operacionesController){
                return res.status(204).json({"message": 'no hay nada amigo'})
            } 
            return res.status(201).json(operacionesRes)
    } catch (e) {
        return res.status(401).json({"error": e.message})
    }
    
})


module.exports = router