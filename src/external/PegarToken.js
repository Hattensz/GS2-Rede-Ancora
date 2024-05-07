export default async function(){
    fetch("https://sso-catalogo.redeancora.com.br/connect/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "client_id": "65tvh6rvn4d7uer3hqqm2p8k2pvnm5wx",
            "client_secret": "9Gt2dBRFTUgunSeRPqEFxwNgAfjNUPLP5EBvXKCn",
            "grant_type": "client_credentials"
        })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro de rede: ${response.status}");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.access_token); // Aqui está o token JWT retornado
        })
        .catch(error => {
            console.error("Erro ao fazer a requisição de autenticação:", error);
    });
}