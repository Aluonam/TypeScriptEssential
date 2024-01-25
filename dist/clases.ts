// CLASES
// las clases nos permiten crear patrones que describen objetos y no sólo las propiedades que contiene un objeto. También su funcionalidad.

class Player {
    constructor(){
        console.log('dentro del constructor')
    }
    taunt(){
        console.log('BOOOO');
    }
}

const player1 = new Player();
console.log(player1)

const player2 = new Player();
console.log(player2)