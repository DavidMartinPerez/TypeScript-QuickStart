// Clase( recipiente del objecto )
//export para pder usar en cualquier fichero.
var Coche = /** @class */ (function () {
    //Construtor
    function Coche(modelo, color, matricula, añoMa) {
        this.modelo = modelo;
        this.color = color;
        this.matricula = matricula;
        this.añoMatriculacion = añoMa;
    }
    //Metodos
    Coche.prototype.setAñoMatricula = function (año) {
        this.añoMatriculacion = año;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    return Coche;
}());
var audi = new Coche("A3", "Blanco", "57275BMX", 1995);
audi.setAñoMatricula(1993);
console.log(audi);
