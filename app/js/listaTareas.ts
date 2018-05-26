//decorador TODO: Resolver 'experimentalDecorators'
function realizada(estado:boolean){
    return function(target: Function){
        target.prototype.saludo = function():void{
            this.estado = estado;
        }
    }
}

class Tarea {
    //Propiedades
    public nombreTarea:string;
    public asignado:string;
    public estado:boolean = false;

    //Constructor
    constructor(tarea,nombre){
        this.nombreTarea = tarea;
        this.asignado = nombre;
    }
    // Métodos
    public getNombreTarea():string{
        return this.nombreTarea;
    }
    public setnombreTarea(tarea:string){
        this.nombreTarea = tarea;
    }
    public getAsignado():string{
        return this.asignado;
    }
    public setAsignar(nombre:string){
        this.asignado = nombre;
    }
    public resulta(){
        this.estado = true;
    }
}

var tarea1 = new Tarea("Aprender POO","David");

//Array donde se guardaran las tareas
var listaTareas = [];

function guardarTarea(){

    let tarea = (<HTMLInputElement>document.getElementById("nombreTarea")).value.toString();
    let asignado = (<HTMLInputElement>document.getElementById("asignada")).value.toString();

    var nuevaTarea = new Tarea(tarea,asignado);
    listaTareas.push(nuevaTarea);

    sacarLista(listaTareas);
}

function sacarLista(listaTareas){
    var list = "<table><tr><th>Nombre Tarea   </th><th>Asignada a...</th> <th>Estado</th></tr>";
    for(var i:number = 0; i < listaTareas.length;i++){
        list = list + "<tr><td id='"+ i +"' >" + listaTareas[i].getNombreTarea() + "</td>" + "<td>" + listaTareas[i].getAsignado() + "</td>";
        if(listaTareas[i].estado == true){
            list = list+"<td>OK</td></tr>"
        }else{
            list = list+"<td onclick='actualizar(" + i + ")'>Terminar</td>"
        }
    }
    list = list + "</table>"
    var tabla = <HTMLElement> document.getElementById("tareas");
    tabla.innerHTML  = list;
}
function actualizar(id){
    listaTareas[id].estado = true;
    sacarLista(listaTareas);
}