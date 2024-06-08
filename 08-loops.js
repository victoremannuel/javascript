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

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existente");
        break;
    } else {
        console.log("Destino não existe");
    }
    contador += 1;
}