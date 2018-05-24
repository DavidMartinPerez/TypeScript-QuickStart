// Clase( recipiente del objecto )

//Interfaces son los métodos obligatorios
// Por lo cual si la clase no tiene estos métodos dará errores.
interface CocheBase{
    setColor(color:string);
    getColor();
}

// class Coche implements CocheBase{


var ford = new Coche("Kuga","Blanco","57275BMX", 2017);

console.log(ford);