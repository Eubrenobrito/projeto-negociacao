import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
                    ${model.lista().map(negociacao => {
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
    formatar(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
