
// 1- Esta bien?????
function zodiaco(dia, mes){

    let signo= ""

    if ((dia>=21 & mes=="03") || (dia<=19 & mes=="04")){
        signo="Aries"
    }else if ((dia>=20 & mes=="04") || (dia<=20 & mes=="05")){
        signo="Tauro"
    }else if ((dia>=21 & mes=="05") || (dia<=20 & mes=="06")){
        signo="Geminis"
    }else if ((dia>=21 & mes=="06") || (dia<=22 & mes=="07")){
        signo="Cancer"
    }else if ((dia>=23 & mes=="07") || (dia<=22 & mes=="08")){
        signo="Leo"
    }else if ((dia>=23 & mes=="08") || (dia<=22 & mes=="09")){
        signo="Virgo"
    }else if ((dia>=23 & mes=="09") || (dia<=22 & mes=="10")){
        signo="Libra"
    }else if ((dia>=23 & mes=="10") || (dia<=21 & mes=="11")){
        signo="Escorpio"
    }else if ((dia>=22 & mes=="11") || (dia<=21 & mes=="12")){
        signo="Sagitario"
    }else if ((dia>=22 & mes=="12") || (dia<=20 & mes=="01")){
        signo="Capricornio"
    }else if ((dia>=21 & mes=="01") || (dia<=19 & mes=="02")){
        signo="Acuario"
    }else if ((dia>=20 & mes=="02") || (dia<=20 & mes=="03")){
        signo="Piscis"
    }

    return signo
}

console.log(zodiaco(24,"05"))

//2

function ubicacion(pais){

    let continente=""

    if (pais=="España" || pais=="Portugal" || pais=="Italia" || pais=="Francia" || pais=="Alemania"){
        continente="Europa"
    }else if (pais=="Angola" || pais=="Argelia" || pais=="Marruecos" || pais=="Egipto" || pais=="Burkina Faso"){
        continente="África"
    }else if (pais=="Estados Unidos" || pais=="Canada" || pais=="Venezuela" || pais=="Colombia" || pais=="Brasil"){
        continente="América"
    }else if (pais=="China" || pais=="Japon" || pais=="Rusia" || pais=="Corea del norte" || pais=="Corea del sur"){
        continente="Asia"
    }else if (pais=="Australia" || pais=="Nueva Zelanda" || pais=="Fiyi" || pais=="Nueva Guinea" || pais=="Samoa"){
        continente="Oceanía"
    }
    
    return continente
}
console.log(ubicacion("Rusia"));

// 9

function textoParidad(num){
    if (num % 2 ==0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}

textoParidad(5)

// 10

function twoFuncPar(arrayParidad){

    textoParidad(numCaracteres(arrayParidad))
    
}

twoFuncPar(["Jaime", "Pedro", "Juan"])