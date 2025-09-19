function sumar(){ //sin parametros y sin retorno
    let a = 3
    let b = 4
    let c = a*b

    console.log(c)

}

function sumar2(a,b){ //con parametros y sin retorno
    let c = a*b
    console.log(c)
}

function sumar3(a,b){ //parametros y retorno
    return a*b
}

sumar()
sumar2(3,4)
console.log(sumar3(3,4))