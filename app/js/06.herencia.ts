// Clase( recipiente del objecto )

//Interfaces son los métodos obligatorios
// Por lo cual si la clase no tiene estos métodos dará errores.

// interface CocheBase

// class Coche implements CocheBase

// Crear una clase hija con extends

class Sport extends Coche{
    public tunning : boolean;

    setTunning(tuneado:boolean){
        this.tunning = tuneado;
    }
    getTunning():boolean{
        return this.tunning;
    }
}

var opelSport = new Sport("Astra","Azul","27275BMX", 1998);

opelSport.setTunning(true);

console.log(opelSport);