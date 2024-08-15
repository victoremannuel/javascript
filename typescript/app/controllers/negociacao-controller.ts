import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData : HTMLInputElement; //tipando o atributo
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');

    constructor () {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update();
    };

    adiciona () : void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    };
    
    criaNegociacao () : Negociacao /*tipando o método*/ {
        const exp = /-/g; //substitui tudo que está sendo procurado pelo conteudo entre barras
        const date = new Date(this.inputData.value.replace(exp, ',')); // procura todas as virculas e substitui usando o exp
        const quantidade = parseInt(this.inputQuantidade.value); //converte para inteiro
        const valor = parseFloat(this.inputValor.value); //converte para float
        return new Negociacao(date, quantidade, valor);
    };

    limparFormulario () : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };
};