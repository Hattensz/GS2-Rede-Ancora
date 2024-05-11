// import connection from "../../external/db/connection";

class Cliente {
    constructor(nomeCompleto, email, telefone, cpf, promocoes) {
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.promocoes = promocoes;
    }
    

//     async salvarNaDataBase() {
//         try {
//             // Configuração da conexão
            

//             // Insere os dados na tabela
//             const query = `INSERT INTO clientes (nome_completo, email, telefone, cpf, promocoes) VALUES (:nomeCompleto, :email, :telefone, :cpf, :promocoes)`;
//             const binds = {
//                 nomeCompleto: this.nomeCompleto,
//                 email: this.email,
//                 telefone: this.telefone,
//                 cpf: this.cpf,
//                 promocoes: this.promocoes ? 1 : 0, // Se promocoes for true, insere 1, senão insere 0
//             };
//             const result = await connection.execute(query, binds);

//             console.log('Registro salvo com sucesso.');

//             // Fecha a conexão
//             await connection.close();
//             console.log('Conexão fechada.');
//         } catch (error) {
//             console.error('Erro ao salvar registro na base de dados:', error);
//         }
//     }

//     toString() {
//         return `Nome Completo: ${this.nomeCompleto}\nE-mail: ${this.email}\nTelefone: ${this.telefone}\nCPF: ${this.cpf}\nDeseja receber promoções por e-mail: ${this.promocoes}`;
//     }
}

export default Cliente;
