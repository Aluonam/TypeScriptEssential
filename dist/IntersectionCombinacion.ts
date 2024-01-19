// INTERSECCION O COMBINACION 

// permite unir dos tipos

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle={
    radius: 5,
    color: 'yellow'
}


// otro ejemplo: 
type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog 
    & {
        age: number
    }

const CatDogAge : CatDog = {
    numLives: 7,
    breed: 'mastin',
    age: 12,
}

