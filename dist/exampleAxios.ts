import axios from 'axios';
import { NumericLiteral } from 'typescript';

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