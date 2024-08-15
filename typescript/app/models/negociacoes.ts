import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes : Array<Negociacao> = [];

    adiciona (negociacao : Negociacao) {
        this.negociacoes.push(negociacao);
    };

    lista () : ReadonlyArray<Negociacao> { /* tipo de array que só permite ler quando chamado por uma instancia fora da classe */
        return this.negociacoes;
    };
};