export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}
    //ESTUDAR MAIS SOBRE CLASSE

    get volume(): number{
        return this.quantidade * this.valor;
    }
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    public static criaDe(dataString:string, quantidadeString:string, valorString: string):Negociacao{
        const exp = /~/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        // const negociacao = new Negociacao (date, quantidade, valor);
        return new Negociacao(date, quantidade, valor);
    }
}