export class Negociacao {
    // private _data : Date;
    // private _quantidade : number;
    // private _valor : number;
    // constructor (data: Date, quantidade: number, valor: number){
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    constructor(_data, //readonly está substituindo o get, ou seja, só pode ler
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); //proteger o código para não conseguir setar a data pelo método setDate
        return data;
    }
}
