export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(seletor:string) {
        this.elemento = document.querySelector(seletor);
    }
    //o metodo template serve para declarar da view
    template(): string {
        return `
           <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th class="text-right">VALOR</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
           </table> 
           `;
    }
    // método update serve para renderizar o template no elemento que foi capturado atraves do construtor(seletor)
    update(): void {
        this.elemento.innerHTML = this.template();
    }
}