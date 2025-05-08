let express = require("express")
let router = express.Router()
let operacionesController = require("../../controllers/operaciones/index")


router.post("/", (req,res)=>{
    let { body } = req
    let operacionesRes = operacionesController(body)

    if (!operacionesController){
        return res.status(200).json({"messaje": 'error amigo'})
    } 
    return res.status(200).json(operacionesRes)
    
})


module.exports = router