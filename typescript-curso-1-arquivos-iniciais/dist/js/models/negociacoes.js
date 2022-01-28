// /classe Negociacoes que irá guardar uma lista de negociacoes
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //    criar um metodo para chamar ele depois
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //    metodo que ira retornar uma lista de negociacoes
    lista() {
        return this.negociacoes;
    }
}
// const negociacioes = new Negociacoes();
// negociacioes.adiciona(new negociacao());
