//UNION TYPES
// permite la unión de varios tipos de datos siginifica OR

let age: number | string = 25; // admite número o string
age = 30;
age = 'veinticinco';

// También se pueden unir tipos de objetos

type Punto = {
    x: number;
    y: number;
}

type Localizacion = {
    lat: number;
    long: number;
}

let coordenadas : Punto | Localizacion;