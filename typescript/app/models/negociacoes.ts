import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes : Negociacao[] = []; // mesma coisa que escrever: private negociacoes : Array<Negociacao> = []

    public adiciona (negociacao : Negociacao) {
        this.negociacoes.push(negociacao);
    };

    public lista () : readonly Negociacao[] { //mesma coisa que escrever ReadonlyArray<Negociacao>
        /* tipo de array que só permite ler quando chamado por uma instancia fora da classe */
        return this.negociacoes;
    };
};