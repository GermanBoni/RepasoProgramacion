"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    //Puedo hacer este metodo sin hacer los atributos publicos????
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    //Esta bien??Puedo utilizar los atributos siendo privados?? Si, que se puede, Desde dentro de la clase ( cuando la estamos definiendo). Cuando no se puede es desde fuera ya que por esos hacemos el metodo get()
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)));
    };
    Punto.prototype.calcularDistancia = function (x2, y2) {
        return Math.sqrt((Math.pow((this.x - x2), 2)) + (Math.pow((this.y - y2), 2)));
    };
    //Para poner "y" en los condicionales es "&" o "&&"?? Es con dos simbolos!
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x == 0 || this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else {
            cuadrante = 3;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var masCercano = puntos[0];
        for (var i = 1; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i].getX(), puntos[i].getY()) < this.calcularDistancia(masCercano.getX(), masCercano.getY())) {
                masCercano = puntos[i];
            }
        }
        return masCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
