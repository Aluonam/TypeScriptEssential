// CLASES
// las clases nos permiten crear patrones que describen objetos y no sólo las propiedades que contiene un objeto. También su funcionalidad.

class Player {
    first: string;
    last: string;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    taunt(){
        console.log('BOOOO');
    }
}

const player1 = new Player('Bob', 'Stuart');
player1.taunt();
console.log(player1.first);

const player2 = new Player('Mimi', 'Grey');
player2.taunt();