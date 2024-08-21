import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://127.0.0.1:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante
                    );
                });
            });
    };
};