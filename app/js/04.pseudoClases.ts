// Clase( recipiente del objecto )

//export para pder usar en cualquier fichero.
class Coche{

    //Propiedades
    public modelo: string;
    public color: string;
    public matricula: string | number;
    //Metodos privados no se pueden aceder desde fuera
    private añoMatriculacion: number;

    //Construtor
    constructor(modelo, color, matricula, añoMa){
        this.modelo = modelo;
        this.color = color;
        this.matricula = matricula;
        this.añoMatriculacion = añoMa;
    }
    //Metodos
    public setAñoMatricula(año:number){
        this.añoMatriculacion = año;
    }

    public setColor(color:string){
        this.color = color;
    }
    public getColor():string{
        return this.color;
    }
}

var audi = new Coche("A3","Blanco","57275BMX",1995);
audi.setAñoMatricula(1993);

console.log(audi);