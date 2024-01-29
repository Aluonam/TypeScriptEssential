var mensaje;
mensaje = 'Hola ts';
console.log(mensaje);
var prueba = 10;
// La inferencia de tipos es que no es necesario definiti el tipo de una variable a la hora de crearla
// No siempre es necesario especificar el tipo de dato.
var mensaje2 = 'prueba';
var numero = 100;
var arrayString1 = [{ nombre: 'Pablo' }, { nombre: 'Pedro' }];
// 2.
var arrayString2 = ['a', 'b', 'c'];
// 3.
var arrayString3 = ['a', 'b', 'c'];
// Definir la firma de la función:
function calculo(x, y) {
    return x * y;
}
var filtro = function (valor) {
    return valor.length >= 5;
};
var animales = ['perro', 'gato', 'pez'];
// Las variables pueden reasignarse: con ANY (el efecto es como usar solo JS asi que no es recomndable ysarlo porque pierde la funcionalidad de TS)
var cualquierValor = 'un valor string';
cualquierValor = 10;
cualquierValor = true;
cualquierValor = {};
// UNKNOWN no se reasigna. Se usa cuando tengo un parámetro que no sé que dato va a obtener pero dentro de la misma función usaré operadores para usar el tipo.
// unknown es más seguro
var variableDesconocido = 10;
// variableString = variableDesconocido; // NO SE PUEDE
var otraVariableDesconocido = variableDesconocido;
// UNDEFINED: variable sin valor asignado.
var variable1 = undefined;
// NULL: variable con valor nulo. Null es un objeto.
var variable2 = null;
// NEVER: el valor nunca sucede.
// por ejemplo: lanzar un error: 
function lanzarError(mensajeError) {
    throw new Error(mensajeError);
}
var saludo = saludar('¡hola!');
// VOID: la funcion no retorna ningun valor
function saludar(mensaje) {
    console.log(mensaje);
}
var error = lanzarError('Ha sucedido un error');
