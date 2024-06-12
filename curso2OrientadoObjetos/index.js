class Cliente {
    nome;
    cpf;
};

class ContaCorrente {
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

const cliente1 = new Cliente();
cliente1.nome = "victor";
cliente1.cpf = 11122233300;

const cliente2 = new Cliente();
cliente2.nome = "ana";
cliente2.cpf = 22233344400;

const ccVictor = new ContaCorrente();
// ccVictor.#saldo = 0;
// ccVictor.#agencia = 1001;
ccVictor.depositar(100);
ccVictor.sacar(10);

console.log(cliente1);
// console.log("saldo:", ccVictor.#saldo);
console.log(cliente2);