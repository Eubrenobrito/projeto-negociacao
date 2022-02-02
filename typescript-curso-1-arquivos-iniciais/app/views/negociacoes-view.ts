import {Negociacoes} from "../models/negociacoes.js";
import {View} from "./view.js";

export class NegociacoesView extends View <Negociacoes>{

    //o metodo template serve para declarar a view
    protected template(model: Negociacoes): string {
        return `
           <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th class="text-center">QUANTIDADE</th>
                        <th class="text-right">VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao =>{
                        return `
                            <tr class="text-center">
                                <td >${this.formatar(negociacao.data)}</td>
                                <td >${negociacao.quantidade}</td>
                                <td >${negociacao.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                       
                </tbody>
           </table> 
           `;
    }

    private formatar(data: Date):string {
        return new Intl.DateTimeFormat()
            .format(data);
    }

    // método update serve para renderizar o template no elemento que foi capturado atraves do construtor(seletor)
    update(model: Negociacoes): void {
        const template =this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}