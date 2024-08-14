console.log(`\nTrabalhando com Listas`);

const listaDeDestinos = new Array(
    `salvador`,
    `sao paulo`,
    `rio de janeiro`
);

const idadeComprador = 16;
const estaAcompanha = true;
let temPassagemComprada = false;
const destino = "sao paulo"

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanha == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("boa viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}