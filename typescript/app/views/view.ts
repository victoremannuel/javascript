export class View {

    protected elemento : HTMLElement; //para que as outras classes(filhas) que estão importando View possam acessar o elemento

    constructor (seletor : string) {
        this.elemento = document.querySelector(seletor);
    };
};