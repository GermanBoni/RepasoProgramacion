import { Punto } from "./Repaso4";
import { Triangulo } from "./triangulo"



let punto2:Punto= new Punto(21, 53)
let punto3:Punto= new Punto(12, 45)
let punto4:Punto= new Punto(5, 12)

let triangulo1:Triangulo= new Triangulo(punto2, punto3, punto4) 

console.log(triangulo1.calcularLongitudLados())
