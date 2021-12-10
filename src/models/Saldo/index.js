class Saldo {
    constructor(valueDeposit, valueOut, id) {
        this.valueDeposit = valueDeposit;
        this.valueOut = valueOut;
        this.saldoFinal = valueDeposit - valueOut
        this.date = new Date();
        this.id = id //this.date.getTime();
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.dataFinal = this.day+'/'+this.month+'/'+this.year
    }
}

export default Saldo;