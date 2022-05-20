
export class Punto{

    private x:number
    private y:number

    constructor(x:number, y:number){
        this.x=x
        this.y=y
    }
//Puedo hacer este metodo sin hacer los atributos publicos????
    toString():string{
        return "(" + this.x.toString() + "," + this.y.toString() + ")"
    }

    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }

    public setX(x:number):void{
        this.x=x
    }
    public setY(y:number):void{
        this.y=y
    }
//Esta bien??Puedo utilizar los atributos siendo privados?? Si, que se puede, Desde dentro de la clase ( cuando la estamos definiendo). Cuando no se puede es desde fuera ya que por esos hacemos el metodo get()
    distanciaAlOrigen():number{
        return Math.sqrt((this.x**2)+(this.y**2))
    }

    calcularDistancia(x2:number, y2:number):number{
        return Math.sqrt(((this.x-x2)**2)+((this.y-y2)**2))
    }
//Para poner "y" en los condicionales es "&" o "&&"?? Es con dos simbolos!

    calcularCuadrante():number{
        
        let cuadrante:number=0

        if (this.x==0 || this.y==0){
            cuadrante=0
        }else if (this.x>0 && this.y>0){
            cuadrante=1
        }else if (this.x>0 && this.y<0){
            cuadrante=4
        }else if (this.x<0 && this.y>0){
            cuadrante=2
        }else{
            cuadrante=3
        }

        return cuadrante       
    }

    calcularMasCercano(puntos:Punto[]):Punto{

        let masCercano:Punto=puntos[0]

        for (let i=1; i<puntos.length;i++){
            if (this.calcularDistancia(puntos[i].getX(), puntos[i].getY()) < this.calcularDistancia(masCercano.getX(), masCercano.getY())){
                masCercano=puntos[i]
            }
        }
        return masCercano
    }

}