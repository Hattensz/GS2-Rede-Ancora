class Busca {
    constructor(placa, linha, familia, marca, codigo, nomeProduto) {
        this.placa = placa;
        this.nomeProduto = nomeProduto
        this.linha = linha;
        this.familia = familia;
        this.marca = marca;
        this.codigo = codigo;
    }
    toJSON() {
        return {
            placa: this.placa,
            nomeProduto: this.nomeProduto,
            linha: this.linha,
            familia: this.familia,
            marca: this.marca,
            codigo: this.codigo
        };
    }


}

export default Busca;
