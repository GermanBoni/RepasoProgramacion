"use strict";
exports.__esModule = true;
var Repaso4_1 = require("./Repaso4");
var triangulo_1 = require("./triangulo");
var punto2 = new Repaso4_1.Punto(21, 53);
var punto3 = new Repaso4_1.Punto(12, 45);
var punto4 = new Repaso4_1.Punto(5, 12);
var triangulo1 = new triangulo_1.Triangulo(punto2, punto3, punto4);
console.log(triangulo1.calcularLongitudLados());
