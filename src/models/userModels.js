const db = require('../config/db');
const md5 = require('md5');


async function adicionarUsuario(nome, email, senha) {

  // Adicionando o novo usuario
   await db.query(`
    INSERT INTO usuario (nome, email, senha, criadoEm) 
    VALUES ('${nome}', '${email}', '${md5(senha)}', now())
    `)
    .then(() => {
      console.log('Usuário criado com sucesso!')
    })
    .catch((erro) => {
      console.error('Erro ao inserir dados, ', erro)
    })
}

async function buscarUsuarioPorEmail(email) {

  const user = await db.query(`
    SELECT * FROM usuario WHERE email = '${email}'
    `)
  
  return user
}

module.exports = {
  adicionarUsuario,
  buscarUsuarioPorEmail
}