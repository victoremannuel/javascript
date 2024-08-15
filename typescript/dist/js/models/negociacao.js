export class Negociacao {
    // private _data : Date;
    // private _quantidade : number;
    // private _valor : number;
    // constructor (data: Date, quantidade: number, valor: number){
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    constructor(data, //readonly está substituindo o get, ou seja, só pode ler
    quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
