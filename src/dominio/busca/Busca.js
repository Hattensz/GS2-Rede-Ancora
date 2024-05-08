import WebHook from "../../external/WebHook";

class Busca {
    constructor(placa, familia, marca, nomeProduto) {
        this.superbusca = familia;
        this.produtoFiltro = { ultimoNivel: nomeProduto, nomeFabricante: marca };
        this.veiculoFiltro = { veiculoPlaca: placa };
        this.produtos = [];
        this.buscarProdutos();
    }

    toQuery() {
        return {
            superbusca: this.superbusca,
            produtoFiltro: this.produtoFiltro,
            veiculoFiltro: this.veiculoFiltro,
            pagina: 0,
            itensPorPagina: 6
        };
    }

    async buscarProdutos() {
        const payload = this.toQuery();
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/produtos/query";
        try {
            const response = await WebHook.fetch(rota, payload);
            if (response && response.pageResult && response.pageResult.data) {
                
                this.produtos = response.pageResult.data.map((produto) => {
                    return {
                        name: produto.data.nomeProduto,
                        imagem: produto.data.imagemReal,
                        price: 38.9,
                        parcel: "12x de R$ 3,24 sem juros"
                    };
                });
            } else {
                console.error('Resposta da API não contém os dados esperados:', response);
            }
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }
}

export default Busca;
