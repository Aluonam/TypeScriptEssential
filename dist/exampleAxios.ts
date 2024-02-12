import axios from 'axios';


axios.get<boolean>('https://jsonplaceholder.typicode.com/users/1').then((response)=>{
    console.log('yeahhh!');
    const {data} = response;
    data
}).catch((error)=>{
    console.log('error', error)
})