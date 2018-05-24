// Clase( recipiente del objecto )

//export para pder usar en cualquier fichero.
class Coche implements CocheBase{

    //Propiedades
    public modelo: string;
    public color: string;
    public matricula: string | number;
    //Metodos privados no se pueden aceder desde fuera
    private anioMatriculacion: number;

    //Construtor
    constructor(modelo, color, matricula, anioMa){
        this.modelo = modelo;
        this.color = color;
        this.matricula = matricula;
        this.anioMatriculacion = anioMa;
    }
    //Metodos
    public setAnoMatricula(anio:number){
        this.anioMatriculacion = anio;
    }

    public setColor(color:string){
        this.color = color;
    }
    public getColor():string{
        return this.color;
    }
}

var audi = new Coche("A3","Blanco","57275BMX",1995);
audi.setAnoMatricula(1993);

console.log(audi);