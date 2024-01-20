// Enum
// definir con un nombre a un conjunto de constantes

// Tipo numérico:
enum Piso {
    Primero = 1,
    Segundo,
    Tercero,
}
// tipo numerico
enum Responses {
    yes = 2,  // al empezar en 2
    no,       // 3
    maybe     // 4
}

// Tipo string:
enum TipoCuarto {
    Individual = 'individual',
    Doble = 'doble',
    Triple = 'triple'
}

let piso: Piso = Piso.Primero;

// tipo string
enum Responses2 {
    yes = 'yes',
    no = 'no',
    maybe = 'maybe'
}

// otros ejemplos:
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}
isDelivered(OrderStatus.RETURNED)