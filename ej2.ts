for(let hora = 0; hora < 24; hora++){
    for(let minuto = 0; minuto < 60; minuto++){
        let horaTexto : string = String(hora)
        let minutoTexto: string = String(minuto)
        let periodo : string = ""
        //control del periodo
        if(hora<12){
            periodo = "AM"
        }
        else{
            horaTexto = String(hora-12) //resto 12h para ajustar el formato
            periodo = "PM"
        }
        if(hora < 10){
            horaTexto = "0"+horaTexto
        }
        if(minuto < 10){
            minutoTexto = "0"+minutoTexto
        }
        console.log(horaTexto+":"+minutoTexto+periodo)
    }   
}
export{}