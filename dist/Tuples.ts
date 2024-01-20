// TUPLES
// solo existe en TS
// permite asignar un tipo exclusivo a cada posició, "matrices de longitud fija y tipado"
// *tupla o upla es una lista (secuencia) ordenada y finita de elementos.

const color: [number, number, number] = [1,2,3]; // solo se permitirá el numero especificado 

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK']
// no podré aádir en la posicion 0 un string.

// LIMITACION: Sí va a admitir que esto se modifice con .pop o .push

goodRes.push(123)
goodRes.pop()

// si metes una tupla en un array deberá seguir el orden de la tupla
const responses : HTTPResponse[] = [[202, 'not found'], [200, 'OK']]