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