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