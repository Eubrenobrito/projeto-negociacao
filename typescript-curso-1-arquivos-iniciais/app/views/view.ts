export abstract class View <T>{
    //modificador protected permite que os componentes filhos dessa herança possam """tocar"""/usar
    protected elemento: HTMLElement;
    private escapar:boolean = false;
    constructor(seletor:string, escapar?:boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else{
            throw Error (`Seletor ${seletor} não existe no Dom.`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void{
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T) : string;

}