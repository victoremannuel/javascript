export class Negociacao {
    // private _data : Date;
    // private _quantidade : number;
    // private _valor : number;

    // constructor (data: Date, quantidade: number, valor: number){
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    constructor (
        private readonly data : Date, //readonly está substituindo o get, ou seja, só pode ler
        private readonly quantidade : number,
        private readonly valor : number
    ) {}

    get volume () : number {
        return this.quantidade * this.valor;
    }

    // get data () : Date {
    //     return this._data;
    // }

    // get quantidade () : number {
    //     return this._quantidade;
    // }

    // get valor () : number {
    //     return this._valor;
    // }
}