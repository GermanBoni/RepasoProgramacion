
//3

function paridad(num){

    impares=[]

    for (let i=0; i<=num; i++){
        if (i%2 != 0){
            impares.push(i)
        }
    }
    console.log(impares)
}

paridad(15)

function reversion(arra1){

    let reversion2=arra1.reverse()
    return reversion2
}
console.log(reversion([2, 4, 6]))

5

function alcoiris(color){

    let pertenencia =[]

    for (let i=0; i<color.length; i++){
        if (color[i]=="Rojo" || color[i]=="Naranja" || color[i]=="Amarillo" || color[i]=="Verde" || color[i]=="Azul" || color[i]=="Indigo" || color[i]=="Violeta"){
            pertenencia.push("Si")
        }else{
            pertenencia.push("No")
        }
    }
    console.log(pertenencia);
}

alcoiris(["Magenta", "Naranja", "Rojo", "Verde"])

6

function paridadArr(array){

    let paridad=""

    for (let i=0; i<array.length; i++){
        if (array[i] % 2==0){
            paridad="Si"
            break
        }else{
            paridad="No"
        }
    }
    return paridad
}
console.log(paridadArr([1, 3, 5, 36]));

7

function eme(arrNombres){

    let condicion1=""

    for (let i=0; i<arrNombres.length; i++){
        if (arrNombres[i][0]=="M"){
            condicion1="Verdadero"
        }else{
            condicion1="Falso"
            break
        }
    } 
    return condicion1 
}

console.log(eme(["Maria", "Pedro", "Mireia", "Mercedes"]))

8

function numCaracteres(arrPalabra){

    let suma=0

    for (let i=0; i<arrPalabra.length;i++){
        suma=suma+arrPalabra[i].length
    }
    return suma
}

console.log(numCaracteres(["Jaime", "Pedro", "Tomas"]))
