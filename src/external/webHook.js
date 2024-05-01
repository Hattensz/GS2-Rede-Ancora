import PegarToken from "./PegarToken";

export default class WebHook {
    static async  webHook(rota, body){
        try {
            const token = await PegarToken();
            return fetch(rota, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Adicionando o token de autorização aqui
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao executar a requisição: ' + response.statusText);
                }
                return response.json();
            });
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            throw error;
        }
    }
    static async  buscaMontadorasDeVeiculos(body){
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/veiculo/montadoras/query"
        return await webHook(rota, body)
    }
    static async  buscaFamiliasEsubFamiliasDeProdutos(body){
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/familias/query"
        return await webHook(rota, body)
    }
    
    async buscaGrupoDeProdutos(body) {
        const rota =  "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/produto/ultimos-niveis/query"
        return await webHook(rota, body)
    }
    
    static async buscaDeProdutos(body) {
        const rota = "https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/produtos/query"
        return await webHook(rota, body)
    }
}