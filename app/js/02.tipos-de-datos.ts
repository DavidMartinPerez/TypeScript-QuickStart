//Se pueden definir tipos de datos para usarlos en las variables
type numerosboolean = boolean | number;

//nombre :tipo = valor
// String
let letras : string = "Variable String!"; // TS es un lenguaje escrito por lo cual aquí solo permitiría texto

// numero
let numero : number = 3;

// boleano
let abierto : boolean = true;

// Any permite cualquier tipo de dato
let datos : any = "Hola";
datos = 3;

//Arrays se pueden definir el tipo de datos que habrá dentro Array<Tipo de datos>
let lenguajes : Array<any> = ["Hola", "pelota", "TS"];

// Otra forma de definir array
//variable: tipodato[] = []
let array : string[] = ["Hola"];

// Tambien se pueden definir varios tipos de datos para las variables
let alfanumerico : string | number = 3;
alfanumerico = "hola";

// Usar el tipo
let variable: numerosboolean = true;
variable = 3;
