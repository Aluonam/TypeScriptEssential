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