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
