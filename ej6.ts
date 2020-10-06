let a : number = 6 // si ponemos 9 ya es más largo que la suma de los otros dos y no se cumple
let b : number = 4
let c : number = 4

if( (a < (b + c)) && (b < (a + c)) && (c < (a + b))){
    console.log("Es un triángulo")
}
else{
    console.log("No es un triángulo")
}

export{}