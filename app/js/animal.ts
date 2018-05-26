// Interfaces
interface Ser{
    nombre:string;
    sexo:string;
    edad:number;
}
// Class
class Animal implements Ser{

    //Propiedades
    public nombre : string;
    public sexo : string;
    public edad : number | undefined;

    // constructor
    constructor(nombre,sexo,edad = null){
        this.nombre = nombre;
        this.sexo = sexo;
        if(edad == null){
            this.edad = 0;
        }else{
            this.edad = edad;
        }
    }
    // Metodos
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string):string{
        return this.nombre = nombre;
    }
    public getSexo():string{
        return this.sexo;
    }
    public setSexo(sexo:string):string{
        return this.sexo = sexo;
    }
    public getEdad():number|undefined{
        return this.edad;
    }
    public setEdad(edad:number):number{
        return this.edad = edad;
    }
    public cumpleaños(){
        this.edad++;
    }
}

// clase hija Animal-Perro
class Perro extends Animal{

    public paseosDia:number;

    //Construtor
    constructor(nombre,sexo,edad,paseos){
        super(nombre,sexo,edad);
        this.paseosDia = paseos;
    }
    //metodos
    public guau(){
        console.log("GUAU GUAU");
    }
}
// clase hija Animal-Gato
class Gato extends Animal{

    public horasDormidas:number;

    //metodos
    public miau(){
        console.log("Miauuuuuuuu~~~~");
    }

    constructor(nombre,sexo,edad,paseos){
        super(nombre,sexo,edad);
        this.horasDormidas = paseos;
    }
}

var animal = new Animal("Pepito","macho");

console.log("##### Class animals ######");
console.log(animal);

var gato = new Gato("Misifu","hembra",1,8)

console.log("##### Class Gato ######");
console.log(gato);
gato.miau();

var perro = new Perro("Dogman","macho",4,3);

console.log("##### Class Perro ######");
console.log(perro);
perro.guau();

// Recuperar cosas
console.log(perro.getNombre());

console.log(gato.getSexo());

console.log("#### Mañana Cumple de Dogman ####");
console.log(perro);
console.log("#### Cumple de Dogman ####");
perro.cumpleaños();
console.log(perro);