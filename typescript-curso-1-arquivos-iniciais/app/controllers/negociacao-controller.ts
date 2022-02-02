import {Negociacao} from "../models/negociacao.js";
import {Negociacoes} from "../models/negociacoes.js";
import {NegociacoesView} from "../views/negociacoes-view.js";
import {MensagensView} from "../views/mensagens-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagensView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
}
    public adiciona(): void {
       const negociacao = this.criaNegociacao();
       if (!this.ehDiaUtil(negociacao.data)) {
           this.mensagemView
               .update('Apenas negociações em dias úteis podem ser feitas');
           return;
       }
           this.negociacoes.adiciona(negociacao);
           this.limparFormulario();
           this.atualizaView();
    }


    private ehDiaUtil(date: Date){
        return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO;
    }

    private criaNegociacao(): Negociacao{
        const exp = /~/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao (date, quantidade, valor);
        return new Negociacao(date, quantidade, valor);

    }

    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Olá, sua negociacao foi adicionada com sucesso!');
    }
}
