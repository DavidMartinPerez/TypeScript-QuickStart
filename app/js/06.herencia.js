// Clase( recipiente del objecto )
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
//Interfaces son los métodos obligatorios
// Por lo cual si la clase no tiene estos métodos dará errores.
// interface CocheBase
// class Coche implements CocheBase
// Crear una clase hija con extends
var Sport = /** @class */ (function (_super) {
    __extends(Sport, _super);
    function Sport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sport.prototype.setTunning = function (tuneado) {
        this.tunning = tuneado;
    };
    Sport.prototype.getTunning = function () {
        return this.tunning;
    };
    return Sport;
}(Coche));
var opelSport = new Sport("Astra", "Azul", "27275BMX", 1998);
opelSport.setTunning(true);
console.log(opelSport);
