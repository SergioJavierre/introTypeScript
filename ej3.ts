let numero : number = 23
let esPrimo : boolean = true //parto de que será primo, si no lo es lo cambiaré
for(let i : number = 2; i < numero; i++){
    let resto = numero % i
    if(resto == 0){ 
        //si divide entre el número i actual y el resto es 0 es que es divisible
        //un número primo solo es divisible por 1 y por sí mismo dando resto 0
        console.log(numero+" no es primo porque es divisible entre "+i)
        esPrimo = false
        break //salgo de la ejecución
    }
}

if(esPrimo){
    console.log(numero+" es primo")
}
export{}