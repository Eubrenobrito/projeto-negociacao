import {View} from "./view.js";

export class MensagensView extends View<string>{
//    metodos
    protected template(model: string) : string{
        return `
            <p class="alert alert-danger">${model}</p>
        `
    }
}