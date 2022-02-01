export class MensagensView {
    private elemento: HTMLElement;
    constructor(seletor:string) {
        this.elemento = document.querySelector(seletor);
    }

//    metodos
    template(model: string) : string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
    update(model: string): void{
        const template = this.template(model);
        this.elemento.innerHTML = template
    }
}