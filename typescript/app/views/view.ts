export class View<T> { //tipo genérico que é definido pela classe filha quando extende a mãe

    protected elemento : HTMLElement; //para que as outras classes(filhas) que estão importando View possam acessar o elemento

    constructor (seletor : string) {
        this.elemento = document.querySelector(seletor);
    };

    update (model : T) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    };

    template (model : T) : string {
        throw Error('Classe filha precisa implementar o método template')
    };
};