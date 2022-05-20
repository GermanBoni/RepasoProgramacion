"use strict";
// 13. Crea la clase Triangulo cuyo constructor reciba tres objetos de la clase Punto
// que son sus vértices.
// 14. Tiene que tener como atributos privados los tres vertices
// 15. Programa el método calcularLongitudLados() : number[] que debe devolver un
// array de tres posiciones, cada una de las cuales debe ser la longitud de uno de
// los lados del triángulo.
// 16. Modificar el fichero main para crear un objeto de la clase triangulo e invocar al
// método calcularLongitudLados.
// 17. Actualizar el GIT con los nuevos desarrollos
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var distancia = [];
        distancia[0] = this.vertice1.calcularDistancia(this.vertice2.getX(), this.vertice2.getY());
        distancia[1] = this.vertice2.calcularDistancia(this.vertice3.getX(), this.vertice3.getY());
        distancia[2] = this.vertice3.calcularDistancia(this.vertice1.getX(), this.vertice1.getY());
        return distancia;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
