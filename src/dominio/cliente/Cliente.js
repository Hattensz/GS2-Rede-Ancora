export default class Cliente {
    constructor(nomeCompleto = "", email = "", telefone = "", cpf = "", promocoes = false) {
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.promocoes = promocoes;
    }

    toString() {
        return `Nome Completo: ${this.nomeCompleto}\nE-mail: ${this.email}\nTelefone: ${this.telefone}\nCPF: ${this.cpf}\nDeseja receber promoções por e-mail: ${this.promocoes}`;
    }

    salvarNaDataBase(){
        
    }
}