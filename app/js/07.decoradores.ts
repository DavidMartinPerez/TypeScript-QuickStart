// Decorador

function llantas(llanta: string){
    return function(target: Function){
        target.prototype.llantas = function():void{
            console.log("Tope de guapa las llantas: "+llanta);
        }
    }
}

//llamamos al decorador
//@llantas('Keskin KT19')
// Declaramos una clase
