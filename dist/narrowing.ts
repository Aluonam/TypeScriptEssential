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


// interface with if
interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    durationEpisodes: number;
}

function getRunTime( media: Movie | TVShow){
    if('numEpisodes' in media){
        return media.numEpisodes * media.durationEpisodes
    }
    return media.duration
}

// para una pelicula cojo los datos de la interfaz Movie
getRunTime({title: 'Mozart', duration: 90 })

// para un show cojo los datos del TVShow:
getRunTime({title: 'Bob Sponja', numEpisodes: 100, durationEpisodes: 20 })


// Discriminar uniones: CARACTERISTICA COMUN ENTRE LAS INTERFACES QUE VOY A COMPARAR
// chicken cow y pig bien pdorian ser archivos diferentes 
// cada una de las interfaces que queremos discriminar deben tener el TYPE como propiedad comun
interface Chicken {
    name: string;
    weight: number;
    age: number;
    __type: 'chicken'; //typeName o kind son otros nombres comunes
}

interface Cow{
    name: string;
    weight: number;
    age: number;
    __type: 'cow'; //etiqeuta compartida en las interfaces q voy a comparar cada una con su valor especifico
}

interface Pig{
    name: string;
    weight: number;
    age: number;
    __type: 'pig';
}

type FarmAnimal = Pig | Chicken | Cow;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.__type){
        case('pig'): return 'oink oink';
        case('cow'): return 'muuuuuuuu';
        case('chicken'): return 'piopio';
        default: 
             const noDeberiaLlegarAqui: never = animal; // se asignaria el tipo nunca dará error porque no entra en ningun caso
    }
}

// probamos a crear un animal:
const margarita: Cow = {
    name: 'Margarita',
    weight: 400,
    age: 12,
    __type: 'cow' // es redundante porque ya das esta info al definitir  Cow pero por si acaso
}