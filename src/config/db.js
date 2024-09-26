// Importando as dependências
const mySql2 = require('mysql2/promise');

// Configuração do banco de dados
const conexao = mySql2.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ratatouillie'
});

// Testando a conexão ao MySQL
conexao.getConnection()
  .then((connection) => {
    console.log('Conectado ao MySQL');
    connection.release();
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MySQL:', error);
  });

// Exportando a conexão do banco de dados
module.exports = conexao;