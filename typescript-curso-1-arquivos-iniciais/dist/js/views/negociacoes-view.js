export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //o metodo template serve para declarar a view
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
                                <td >${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td >${negociacao.quantidade}</td>
                                <td >${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                       
                </tbody>
           </table> 
           `;
    }
    // método update serve para renderizar o template no elemento que foi capturado atraves do construtor(seletor)
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
