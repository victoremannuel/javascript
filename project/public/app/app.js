// document
//     .querySelector('#myButton')
//     .onclick = () => alert('oi');

import { handleStatus } from './utils/promise-helpers.js';

document
    .querySelector('#myButton')
    .onclick = () =>
        fetch('http://localhost:3000/notas')
            .then(handleStatus) //importei do utils
            .then(notas => console.log(notas))
            .catch(error => console.log(error));