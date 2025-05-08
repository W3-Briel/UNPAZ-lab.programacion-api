let operaciones = {
    "suma": (a,b)=> a+b,
    "resta": (a,b)=> a-b,
    "div": (a,b)=> a/b,
    "mult": (a,b)=> a*b,
    "resto": (a,b)=> a%b
}

let operacionesController = (body)=>{
    let result = body.map(data => {
        let op1 = data.op1
        let op2 = data.op2
        return {...data, "result": operaciones[data.fn](op1,op2)}
    })

    return result
}

module.exports = operacionesController