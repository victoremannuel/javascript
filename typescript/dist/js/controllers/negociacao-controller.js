import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update();
    }
    ;
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    ;
    criaNegociacao() {
        const exp = /-/g; //substitui tudo que está sendo procurado pelo conteudo entre barras
        const date = new Date(this.inputData.value.replace(exp, ',')); // procura todas as virculas e substitui usando o exp
        const quantidade = parseInt(this.inputQuantidade.value); //converte para inteiro
        const valor = parseFloat(this.inputValor.value); //converte para float
        return new Negociacao(date, quantidade, valor);
    }
    ;
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    ;
}
;
