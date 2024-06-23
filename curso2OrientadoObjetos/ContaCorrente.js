import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //convenção o _ representar um atributo privado
    // _saldo;
    //# também representa que é privado como no Java
    #saldo;
    _agencia;
    _cliente;

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        } else {
            console.log("saldo insuficiente");
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("erro: valor negativo");
        }
        this.#saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.#saldo;
    }
};