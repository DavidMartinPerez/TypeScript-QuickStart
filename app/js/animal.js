var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
var Animal = /** @class */ (function () {
    // constructor
    function Animal(nombre, sexo, edad) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }
    // Metodos
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal.prototype.setNombre = function (nombre) {
        return this.nombre = nombre;
    };
    Animal.prototype.getSexo = function () {
        return this.sexo;
    };
    Animal.prototype.setSexo = function (sexo) {
        return this.sexo = sexo;
    };
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edad) {
        return this.edad = edad;
    };
    Animal.prototype.cumpleaños = function () {
        this.edad++;
    };
    return Animal;
}());
// clase hija Animal-Perro
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    //Construtor
    function Perro(nombre, sexo, edad, paseos) {
        var _this = _super.call(this, nombre, sexo, edad) || this;
        _this.paseosDia = paseos;
        return _this;
    }
    //metodos
    Perro.prototype.guau = function () {
        console.log("GUAU GUAU");
    };
    return Perro;
}(Animal));
// clase hija Animal-Gato
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, sexo, edad, paseos) {
        var _this = _super.call(this, nombre, sexo, edad) || this;
        _this.horasDormidas = paseos;
        return _this;
    }
    //metodos
    Gato.prototype.miau = function () {
        console.log("Miauuuuuuuu~~~~");
    };
    return Gato;
}(Animal));
var animal = new Animal("Pepito", "macho", 1);
console.log("##### Class animals ######");
console.log(animal);
var gato = new Gato("Misifu", "hembra", 1, 8);
console.log("##### Class Gato ######");
console.log(gato);
gato.miau();
var perro = new Perro("Dogman", "macho", 4, 3);
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
