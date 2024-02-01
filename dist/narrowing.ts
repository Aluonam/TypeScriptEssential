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
// Typeof Guards: comprueba el tipo de valor
// ejemplo:
function triple2(value: number | string){
    if(typeof value === 'string'){
        return value.repeat(3)
    }
    return value * 3;
}

