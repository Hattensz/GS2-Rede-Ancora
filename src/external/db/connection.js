import OracleDB from "oracledb";

async function run() {
  let connection;

  try {
    // Configuração da conexão
    const connectionConfig = {
      user: 'seu_usuario',
      password: 'sua_senha',
      connectString: 'localhost:1521/seu_sid', // ou o nome do serviço
    };

    // Estabelece a conexão
    connection = await OracleDB.getConnection(connectionConfig);

    console.log('Conexão estabelecida com sucesso.');

    // Realiza alguma operação no banco de dados
    // Por exemplo, consulta simples
    const result = await connection.execute('SELECT * FROM sua_tabela');
    console.log('Resultado da consulta:', result.rows);
  } catch (error) {
    console.error('Erro ao conectar:', error);
  } finally {
    // Fecha a conexão
    if (connection) {
      try {
        await connection.close();
        console.log('Conexão fechada.');
      } catch (error) {
        console.error('Erro ao fechar conexão:', error);
      }
    }
  }
}

run();
