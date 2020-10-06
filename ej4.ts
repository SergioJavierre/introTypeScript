let año : number = 2021

//es bisiesto si es divisible entre cuatro y (no es divisible entre 100 o es divisible entre 400).
if ((año % 4 == 0) && ((año % 100) != 0) || (año % 400 == 0 )){
    console.log(año+" es bisiesto")
}
else{
    console.log(año+" no es bisiesto")
}
export{}