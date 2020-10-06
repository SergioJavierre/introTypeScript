for(let hora = 0; hora < 24; hora++){
    for(let minuto = 0; minuto < 60; minuto++){
        let horaTexto : string = String(hora)
        let minutoTexto: string = String(minuto)
        if(hora < 10){
            horaTexto = "0"+horaTexto
        }
        if(minuto < 10){
            minutoTexto = "0"+minutoTexto
        }
        console.log(horaTexto+":"+minutoTexto)
    }   
}

export{}