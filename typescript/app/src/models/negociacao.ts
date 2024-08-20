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
        private _data : Date, //readonly está substituindo o get, ou seja, só pode ler
        public readonly quantidade : number,
        public readonly valor : number
    ) {}

    get volume () : number {
        return this.quantidade * this.valor;
    }

    get data () : Date {
        const data = new Date(this._data.getTime()); //proteger o código para não conseguir setar a data pelo método setDate
        return data;
    }

    public static criaDe (dataString : string, quantidadeString : string, valorString : string) : Negociacao{
        const exp = /-/g; //substitui tudo que está sendo procurado pelo conteudo entre barras
        const date = new Date(dataString.replace(exp, ',')); // procura todas as virculas e substitui usando o exp
        const quantidade = parseInt(quantidadeString); //converte para inteiro
        const valor = parseFloat(valorString); //converte para float
        return new Negociacao(date, quantidade, valor);
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