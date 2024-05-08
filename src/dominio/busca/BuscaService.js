import WebHook from './WebHook';

export default class BuscaService {
    constructor() {
        this.webHook = new WebHook();
    }

    async buscarPorLinhaFamiliaMarcaCodigo(linha, familia, marca, codigo){
        const montadoras = await this.buscaMontadorasDeVeiculos();

        const familias = await this.buscaFamiliasEsubFamiliasDeProdutos();

        
        const grupos = await this.buscaGrupoDeProdutos();

        // Construir lógica de busca por linha, família, marca e código
        const resultados = {
            montadoras,
            familias,
            grupos,
            // Adicione aqui a lógica de cruzamento dos dados e busca por linha, família, marca e código
        };
        return resultados;

    }

    async buscaMontadorasDeVeiculos() {
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/veiculo/montadoras/query";
        return  await this.webHook.fetch(rota);
        
        
    }

    async buscaFamiliasEsubFamiliasDeProdutos() {
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/familias/query";
        return await this.webHook.fetch(rota);
         
    }

    async buscaGrupoDeProdutos() {
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/ultimos-niveis/query";
        
        return await this.webHook.fetch(rota);
       
    }

    async buscaDeProdutos(params) {
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/produtos/query";
    
        return await this.webHook.fetch(rota, params);
            
        
    }
}
