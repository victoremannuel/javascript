export class ContaCorrente {
    //convenção o _ representar um atributo privado
    // _saldo;
    //# também representa que é privado como no Java
    #saldo;
    #agencia;

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
};