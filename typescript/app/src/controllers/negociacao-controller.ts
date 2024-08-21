import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData : HTMLInputElement; //tipando o atributo
    @domInjector('#quantidade')
    private inputQuantidade : HTMLInputElement;
    @domInjector('#valor')
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor () {
        // this.inputData = <HTMLInputElement>document.querySelector('#data '); //dois tipos de cast
        // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;//dois tipos de cast
        // this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    };

    @inspect
    @logarTempoDeExecucao()
    public adiciona () : void {
        /*
        Teste de remover comentário em tempo de compilação
        */
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
            .update('Apenas negociações em dias úteis são aceitas');
            return;
        };
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    };

    public importaDados() : void {
        fetch('http://127.0.0.1:8080/dados')
            .then(res => res.json())
            .then((dados : any[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante
                    );
                });
            })
            .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                };
                this.negociacoesView.update(this.negociacoes);
            });
    };

    private ehDiaUtil (data : Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    };

    
    private limparFormulario () : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };

    private atualizaView () : void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociacao adicionada com sucesso!');
    };
};