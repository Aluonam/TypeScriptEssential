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

// También se pueden unir funciones

function printAge( age: number | string): void {
    console.log(`Tienes ${age} años`)
}

printAge(50);
printAge('cincuenta');

// union de funciones es útil cuando quiero manejar lo que devuelve
function calcularTasas( price: number | string, tax: number){
    if(typeof price === 'string'){
        price = parseFloat(price.replace('$', ''))
    } else {
        price * tax
    }
}

// unión de tipos en arrays
// mejor usar varios tipos que any 
const varios : any[] = [1,2,3,'hola', true]

const numberANDString: (number | string)[] = [1,2,3, 'hola'] // admite NUMEROS y STRING
const numberOrString: number[] | string[] = [1,2,3,] // admite numeros O string