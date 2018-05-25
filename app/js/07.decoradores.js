// Decorador
function llantas(llanta) {
    return function (target) {
        target.prototype.llantas = function () {
            console.log("Tope de guapa las llantas: " + llanta);
        };
    };
}
//llamamos al decorador
//@llantas('Keskin KT19')
// Declaramos una clase
