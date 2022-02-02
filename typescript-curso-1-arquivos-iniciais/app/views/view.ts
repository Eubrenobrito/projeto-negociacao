export abstract class View <T>{
    //modificador protected permite que os componentes filhos dessa herança possam """tocar"""/usar
    protected elemento: HTMLElement;
    constructor(seletor:string) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T) : string;

}