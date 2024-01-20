let mensaje:string;
mensaje = "Hola ts";
console.log(mensaje)

const prueba:number = 10;


// La inferencia de tipos es que no es necesario definiti el tipo de una variable a la hora de crearla
// No siempre es necesario especificar el tipo de dato.

let mensaje2 = "prueba";
const  numero = 100;


//DEFINIR ARRAY: 
// 1.
interface Persona1{
    nombre: string
}
const arrayString1: Array<Persona1> = [{nombre: 'Pablo'}, {nombre: 'Pedro'}];
// 2.
const arrayString2: Array<string> = ['a', 'b', 'c']
// 3.
const arrayString3: string[] = ['a', 'b', 'c']


// Definir la firma de la función:

function calculo( x: number, y: number ): number{
    return x * y;
}

const filtro = (valor: string): boolean =>{
    return valor.length >= 5;
}

const animales: string[] = ['perro', 'gato', 'pez'];


// Las variables pueden reasignarse: con ANY (el efecto es como usar solo JS asi que no es recomndable ysarlo porque pierde la funcionalidad de TS)
let cualquierValor : any = 'un valor string';

cualquierValor = 10;
cualquierValor = true;
cualquierValor = {};


// UNKNOWN no se reasigna. Se usa cuando tengo un parámetro que no sé que dato va a obtener pero dentro de la misma función usaré operadores para usar el tipo.
// unknown es más seguro
let variableDesconocido: unknown = 10;

// variableString = variableDesconocido; // NO SE PUEDE
let otraVariableDesconocido = variableDesconocido;




// UNDEFINED: variable sin valor asignado.
let variable1: undefined = undefined;

interface Persona2 {
    nombre2: string;
    apellido2: undefined;
}

// NULL: variable con valor nulo. Null es un objeto.
let variable2: null = null;


// NEVER: el valor nunca sucede.
// por ejemplo: lanzar un error: 
function lanzarError(mensajeError: string): never {
    throw new Error(mensajeError);
}
let saludo = saludar("¡hola!");

// VOID: la funcion no retorna ningun valor
function saludar(mensaje:string ):void{
    console.log(mensaje);
}

let error = lanzarError("Ha sucedido un error")

