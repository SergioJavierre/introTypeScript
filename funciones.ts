const saludaComoEstas = (nombre :string) : void => {
    if(nombre == "Fernando"){
        console.log("Hola "+nombre)
    }
    else if( nombre == "Sergio "){
        console.log("Qué tal?")
    }
    else{
        console.log("Hasta luego")
    }
}

//saludaComoEstas("Fernando")
//saludaComoEstas("Sergio")


const suma = (a: number, b: number) : number => {
    return a+b
}

let resultado = suma(2,4)

const calculadora = (
    operacion : string, 
    a: number, 
    b: number) : number => {
        if(operacion == "suma"){
            return a+b
        }
        else if(operacion == "resta"){
            return a-b
        }
        else{
            console.log("Operación incorrecta")
            return -1
        }
    }

let resultadoSuma = calculadora("suma",2,3)
let resultadoResta = calculadora("resta",2,3)

const numPrimo = (numero : number) : boolean => {
    let esPrimo = true
    for(let i = 2; i < numero; i++){
        if( numero % i == 0){
            esPrimo = false
            break
        }
    }
    return esPrimo
}

let listaPrimos : Array<number> = []
let listaNoPrimos : Array<number> = []

for(let num = 1; num < 100; num++){
    let esPrimo = numPrimo(num)
    if(esPrimo){
        listaPrimos.push(num)
        //console.log(num+" es primo")
    }
    else{
        listaNoPrimos.push(num)
        //console.log(num+" no es primo")
    }
}

//console.log("Son primos "+listaPrimos)

const calculaArea = 
    (lado : number, altura? :number) : number => {
    if(altura){
        return lado*altura/2
    }
    else{
        return lado*lado
    }
}

let areaCuadrado = calculaArea(5)
let areaTriangulo = calculaArea(3,4)