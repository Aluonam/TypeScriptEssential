// GENERICS: permite definir funciones reutilizables que pueden trabajar con múltiples tipos.
/* Todo lo que esto dice es que la función acepta un único número o cadena y devuelve un único número o cadena.
Pero podría escribir una función genérica que diga: Si me das un número, te devuelvo un número.
Si me das una cadena, te devuelvo una cadena.
Si me das un booleano, te devuelvo un booleano.
*/

//  function name <T> (element: T) : T[] { return[element]}
 
const num: Array<number> = [] // Nos lo devolverá en forma de array de números.
const colors: Array<string> = [] 

function numberIdentity(item: number): number{
    return item;
}

function stringIdentity(item: string): string{
    return item;
}

function booleanIdentity(item: boolean): boolean{
    return item;
}

// function identity(item: any): any{
//     return item;
// }

function identity<Type>(item: Type): Type {
    return item;
}

// function identity<T>(item: T): T {
//     return item;
// } // normalmente se usa la T

identity<number>(7)
identity<string>('Hi')


// uso más práctico
function getRandomNumberElement(list: number[]){
    // Devolveria solo número
}
function getRandomStringElement(list: string[]){
    // Devolveria solo string
}
function getRandomElement(list: any[]){
    // Devolveria cualquiera
}
// Pero todas estás al final se resumen en:
function getRandomElementWithGeneric<T>(list:T[]): T{
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex]
}


// otro ejemplo: con dos tipos de objetos
function merge<T, U>(object1:T, object2:U){ // Por consenso se identifican como T U V...siguiendo el abecedario
    return{
        ...object1,
        ...object2
    }
}
merge({ name: 'colt' }, { pets:['blue', 'elton'] });
console.log(merge({ name: 'colt' }, { pets:['blue', 'elton'] }))

