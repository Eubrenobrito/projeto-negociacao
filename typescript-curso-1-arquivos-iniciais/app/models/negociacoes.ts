import {Negociacao} from "./negociacao";

/classe Negociacoes que irá guardar uma lista de negociacoes
export class Negociacoes {
    private negociacoes: Array<Negociacoes> = [];

//    criar um metodo para chamar ele depois
    adiciona(negociacao: Negociacoes){
        this.negociacoes.push(negociacao);
    }

//    metodo que ira retornar uma lista de negociacoes
    lista(): ReadonlyArray<Negociacoes>{
        return this.negociacoes;
    }
}

const negociacioes = new Negociacoes();
negociacioes.adiciona(new Negociacao())