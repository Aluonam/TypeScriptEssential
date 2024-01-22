// INTERFACE
// Describe la forma de los objetos y solo de los objetos
// son muy parecidas a los alias tipo
 
interface Huesped {
    idHuesped: string,
    nombre: string,
    apellido: string,
    correo: string,
    direccion?: string,
    telefono?: string
}

type PisoOption = 'primer piso' | 'segundo piso';

interface Cuarto {
    id: number,
    tipo: 'individual' | 'doble' | 'triple',
    piso: PisoOption,
    precioNoche: number
}

interface Reservacion {
    idReservacion: string,
    huesped: Huesped,
    fechaEntrada: Date,
    fechaSalida: Date,
    cuarto: Cuarto,
    nochesReservadas?: number
}


// se pueden definir los tipos de propiedades como otras interfaces

const datosHuesped: Huesped = {
    idHuesped: '01',
    nombre: 'Dennis',
    apellido: 'Lizano',
    correo: 'dennis@c.com',
    direccion: 'calle 3, avenida 8',
    telefono: '8885698'
}

const reservacion: Reservacion = {
    idReservacion: 'r01',
    huesped: datosHuesped,
    fechaEntrada: new Date('2021/10/02'),
    fechaSalida: new Date('2021/10/05'),
    cuarto: {
        id: 10,
        tipo: 'individual',
        piso: 'primer piso',
        precioNoche: 80
    },
    nochesReservadas: 3
}

// Definir métodos en las interfaces:
interface Product {
    name: string;
    price: number;
    applyDiscount( discount: number ): number; // Especifica que recibe y devuelve el método
}

const shoes: Product = {
    name: 'blue boots',
    price: 50,
    applyDiscount( amount: number ){
        // return 5
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },

}
console.log(shoes.applyDiscount(0.5))


// Ejemplo Interfaz con método: y para comprender diferencia entre TYPE e INTERFAZ
// los types se reescriben, no se añaden como sí hacen las interfaces
interface Dog {
    name: string;
    age: number;
}

interface Dog {  // Añades datos a la interfaz. INTERFAZ = AÑADE (extiende)
    breed: string;
    bark(): string; 
}

const Acrux: Dog = { // Dog será el total de los datos, no podemos poner solo unos pocos de todos los definidos
    name: 'Acrux',
    age: 7,
    breed: 'mestizo',
    bark(){      // como es un método debe darse el valor como un método
        return 'GUAU GUAU!'
    }
}


// EXTENDING INTERFACES
// Interfaz que extiende de interfaz : añade las funcionalidades de la interfaz original" la que va después del extend
// interface InterfazQueAñadeFuncionalidad extends InterfazOriginal {}

interface ServiceDog extends Dog {
    job: 'drug-sniffing' | 'bomb-sniffing' | 'guide dog'
}

const bobi: ServiceDog = {
    name: 'Bobi',
    age: 3,
    breed: 'galgo',
    bark(){
        return 'bark!'
    },
    job: 'bomb-sniffing'
}


