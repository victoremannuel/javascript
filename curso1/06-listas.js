console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `Sao paulo`;
// const rioDeJaneiro = `Rio da janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `rio de janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista

console.log("Destinos possíveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);