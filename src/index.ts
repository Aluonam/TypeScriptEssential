let mensaje:string;
mensaje = "Hola ts";
console.log(mensaje)

const prueba:number = 10;


// Definir tipo de inferencia que es una variable:
// No siempre es necesario especificar el tipo de dato.

let mensaje2 = "prueba";
const  numero = 100;

interface Persona{
    nombre: string
}
const arregloPersonas: Array<Persona> = [{nombre: 'Pablo'}, {nombre: 'Pedro'}];


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

interface Persona {
    nombre: string;
    apellido: undefined;
}

// NULL: variable con valor nulo. Null es un objeto.
let variable2: null = null;