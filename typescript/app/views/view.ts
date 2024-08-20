export abstract class View<T> { //tipo genérico que é definido pela classe filha quando extende a mãe
//classe abstrata impede sua instancia direta, ou seja, fora do construtor

    protected elemento : HTMLElement; //para que as outras classes(filhas) que estão importando View possam acessar o elemento

    constructor (seletor : string) {
        this.elemento = document.querySelector(seletor);
    };

    public update (model : T) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    };

    protected abstract template (model : T) : string; //abstrato para obrigar as classes filhas a implementar template
};