// Clase( recipiente del objecto )
//export para pder usar en cualquier fichero.
var Coche = /** @class */ (function () {
    //Construtor
    function Coche(modelo, color, matricula, anioMa) {
        this.modelo = modelo;
        this.color = color;
        this.matricula = matricula;
        this.anioMatriculacion = anioMa;
    }
    //Metodos
    Coche.prototype.setAnoMatricula = function (anio) {
        this.anioMatriculacion = anio;
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
audi.setAnoMatricula(1993);
console.log(audi);
