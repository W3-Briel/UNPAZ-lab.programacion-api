/**
 * @description formato esperado por el controller, para realizar operaciones correctamente
 * @typedef {Object} Operacion
 * @property {number} op1 operador uno
 * @property {number} op2 operador dos
 * @property {string} fn nombre de una operacion
 */

/**
 * @description formato de operacion esperado
 * @typedef {Object} Result
 * @property {number} op1 operador uno
 * @property {number} op2 operador dos
 * @property {string} fn nombre de una operacion
 * @property {number} result resultado de la operacion
 */

/**
 * objeto con metodos para las operaciones del endpoint
*/
let operaciones = {
    "suma": (a,b)=> a+b,
    "resta": (a,b)=> a-b,
    "div": (a,b)=> a/b,
    "mult": (a,b)=> a*b,
    "resto": (a,b)=> a%b
}

/**
 * 
 * @param {Array<Operacion>} body operaciones en formato json
 * @returns {Array<Result> | undefined}
*/
let operacionesController = (body)=>{

    let result = body.map(data => {

        if (! (data.fn in operaciones) ) throw new Error("La operacion no es soportada")

        let op1 = data.op1
        let op2 = data.op2
        return {...data, "result": operaciones[data.fn](op1,op2)}
    })

    return result
}

module.exports = operacionesController