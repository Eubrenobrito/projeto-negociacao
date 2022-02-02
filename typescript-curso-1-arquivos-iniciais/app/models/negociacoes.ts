import {Negociacao} from "./negociacao.js";

// /classe Negociacoes que irá guardar uma lista de negociacoes
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

//    criar um metodo para chamar ele depois
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

//    metodo que ira retornar uma lista de negociacoes
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

// const negociacioes = new Negociacoes();
// negociacioes.adiciona(new negociacao());