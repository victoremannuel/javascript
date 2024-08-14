import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("victor", 11122233300);

const cliente2 = new Cliente("ana", 22233344400);

const ccVictor = new ContaCorrente();
// ccVictor.#saldo = 0;
// ccVictor.#agencia = 1001;
ccVictor.depositar(100);
ccVictor.sacar(10);

console.log(cliente1);
// console.log("saldo:", ccVictor.#saldo);
console.log(cliente2);

