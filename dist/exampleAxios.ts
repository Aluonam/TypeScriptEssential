import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users/1').then((response)=>{
    console.log('yeahhh!')
}).catch((error)=>{
    console.log('error', error)
})