const db = require('../config/db')


function adicionarUsuario(nome, email, senha) {

  // Adicionando o novo usuario
  db.query(`
    INSERT INTO usuarios (nome, email, senha, criadoEm) 
    VALUES ('${nome}', '${email}', '${senha}', now())
    `)
    .then(() => {
      console.log('Usuário criado com sucesso!')
    })
    .catch((erro) => {
      console.error('Erro ao inserir dados, ', erro)
    })
}

module.exports = {
  adicionarUsuario
}