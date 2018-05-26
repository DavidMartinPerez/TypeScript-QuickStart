module Tienda{
    class Ropa{
        constructor(public titulo:string){
            alert(titulo)
        }
    }

    export class Informatica{
        constructor(public titulo: string){
            alert("Tienda de "+ titulo)
        }
    }

}

import Informatica = Tienda.Informatica;

let cargarInformatica = new Informatica("Roaload");