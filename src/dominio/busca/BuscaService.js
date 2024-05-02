



export default class BuscaService {
    constructor(busca, webHook){
        this.busca = busca
        this.webHook = webHook
    }
     static async  buscaMontadorasDeVeiculos(){
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/veiculo/montadoras/query"
        return await this.webHook(rota, busca)
    }
    static async  buscaFamiliasEsubFamiliasDeProdutos(){
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/familias/query"
        return await this.webHook(rota, busca)
    }
    
    async buscaGrupoDeProdutos(body) {
        const rota =  "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/ultimos-niveis/query"
        return await this.webHook(rota, busca)
    }
    
    static async buscaDeProdutos(body) {
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/produtos/query"
        return await this.webHook(rota, busca)
    }
}