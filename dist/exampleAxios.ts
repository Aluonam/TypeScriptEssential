import axios from 'axios';
import { NumericLiteral } from 'typescript';
import  _ from 'lodash'; // tiene diferentes métodos se llaman con _.


interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: number
    geo: {
        lat: string,
        lng: string
        }
    },
    phone: number
    website: string
    company: {
    name: string
    catchPhrase: string
    bs: string
    }
}

axios
    .get<User>('https://jsonplaceholder.typicode.com/users/1')
    .then((response)=>{
        console.log('yeahhh!');
        // const {data} = response;
        //data.name // El dato que quieras sacar en base al esquema del objeto en la interfaz si no lo llamas directamente en printUser como:
        printUser(response.data)
    }).catch((error)=>{
        console.log('error', error)
    })

    function printUser( user: User ){
        console.log(user.name)
        console.log(user.email)
        console.log(user.phone)
    }


// Cambio la url de forma que me devuelva todos los usuarios y no solo uno:  https://jsonplaceholder.typicode.com/users
// entonces debo modificar: 
axios
    .get<User []>('https://jsonplaceholder.typicode.com/users') // Además debes cambiar el tipo ahora es un ARRAY
    .then((response)=>{
        console.log('yeahhh!');
        response.data.forEach(printUser);
    }).catch((error)=>{
        console.log('error', error)
    })


// Referencias:
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//     }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//     }
//     }
