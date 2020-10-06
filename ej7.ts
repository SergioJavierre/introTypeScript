let inicio : number = 0
let fin : number = 100

let numeroBusqueda : number = 63
let numeroPasada : number = 1

while(true){
    let centro = Math.floor(( fin + inicio) / 2)
    console.log("Buscando en rango "+inicio+" - "+fin)
    console.log("Comparando con "+centro)
    if(numeroBusqueda == centro){
        console.log("Encontrado "+numeroBusqueda+" en la pasada "+numeroPasada)
        break
    }
    else if(numeroBusqueda < centro){
        console.log("El que busco es más pequeño")
        fin = centro 
    }
    else if(numeroBusqueda > centro){
        console.log("El que busco es más grande")
        inicio = centro
    }
    console.log("\n")
    numeroPasada++
}