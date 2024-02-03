// NARROWING O ESTRECHAMIENTO
// usado si necesitas disminuir de varios valores aceptados a uno solo.
function triple(value: number | string) {
    if (typeof value === 'string') {
        //return value * 3 // no funciona porque value peude ser un numero o un string 
       return value.repeat(3); 
    }
    return value * 3;
  }

  console.log('hi'.repeat(3))


//----------------------------------------------------------------
// 1. Typeof Guards: guardia de tipo comprueba el tipo de valor
// ejemplo: 
function triple2(value: number | string){
    if(typeof value === 'string'){
        return value.repeat(3)
    }
    return value * 3;
}

// 2. Truthiness Guards: guardia de veracidad
// coacciona un ode los valores como verdadero o falso.
const elem = document.getElementById('idk');
if(elem){
    elem    // HTMLelement
} else {
    elem    // null
}

const printLetters = (word?: string) =>{
    if(word){
        for (let character of word){
            console.log(character)
        }
    } else {
        console.log('no estás pasando una palabra') // no tiene el mismo nivel de certaza que el anterior tipo. Solo se comprueba si es true o false
    }
}


// 3. Equality Narrowing
function someDemo(x: string | number, y: string | boolean){
    if(x === y){ // triple = para saber si son cadenas exactas " " === " "
        x.toUpperCase()
    }
}
someDemo(3, '3')