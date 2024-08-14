console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `Sao paulo`;
// const rioDeJaneiro = `rio da janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `rio de janeiro`
);

const idadeComprador = 16;
const estaAcompanha = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo um item
// } else if (estaAcompanha) {
//     console.log("comprador menor de idade, mas está acompanhada");
//     listaDeDestinos.splice(1, 1); //removendo um item
// } else {
//     console.log("nao é maior de idade, nao posso vender");
// }

if (idadeComprador >= 18 || estaAcompanha == true) {
    console.log("boa viagem");
    listaDeDestinos.splice(1, 1); //removendo um item
} else {
    console.log("nao é maior de idade, nao posso vender");
}

console.log("embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("boa viagem");
} else {
    console.log("voce nao pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
