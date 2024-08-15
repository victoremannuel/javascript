export class Negociacoes {
    constructor() {
        this.negociacoes = []; // mesma coisa que escrever: private negociacoes : Array<Negociacao> = []
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        return this.negociacoes;
    }
    ;
}
;
