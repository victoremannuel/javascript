export class Negociacoes {
    constructor() {
        this.negociacoes = []; // mesma coisa que escrever: private negociacoes : Array<Negociacao> = []
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        /* tipo de array que só permite ler quando chamado por uma instancia fora da classe */
        return this.negociacoes;
    }
    ;
}
;
