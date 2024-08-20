export abstract class View<T> { //tipo genérico que é definido pela classe filha quando extende a mãe
//classe abstrata impede sua instancia direta, ou seja, fora do construtor

    protected elemento : HTMLElement; //para que as outras classes(filhas) que estão importando View possam acessar o elemento
    private escapar : boolean = false;

    constructor (seletor : string, escapar ?: boolean) {
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error ('seletor não existe no DOM, verifique.')
        }
        if (escapar) {
            this.escapar = escapar;
        };
    };

    public update (model : T) : void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        };
        this.elemento.innerHTML = template;
    };

    protected abstract template (model : T) : string; //abstrato para obrigar as classes filhas a implementar template
};