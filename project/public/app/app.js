// document
//     .querySelector('#myButton')
//     .onclick = () => alert('oi');

// app/app.js
import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';

const sumItems = code => notas => 
    notas.$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)

document
.querySelector('#myButton')
.onclick = () => 
    service
    .listAll()
    .then(sumItems('2143'))
    .then(console.log)
    .catch(console.log);