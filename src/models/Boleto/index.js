class Boleto {
    constructor(label, vencimento) {
        this.label = label;
        this.vencimento = vencimento;
        this.date = new Date();
        this.id = this.date.getTime();

    }
}

export default Boleto;