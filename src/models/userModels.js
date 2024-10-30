const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const md5 = require('md5');


async function adicionarUsuario(nome, email, senha) {
  const user = await prisma.usuario.create({
    data: {
      nome: nome,
      email: email,
      senha: md5(senha),
      criadoEm: new Date()
    }
  }).then(() => {
    console.log('Usuário criado com sucesso!')
  }).catch((erro) => {
    console.error('Erro ao inserir dados, ', erro)
  })
  return user
}

async function buscarUsuarioPorEmail(email) {

  const user = await prisma.usuario.findUnique({
    where: {
      email: email
    }
  })
  return user
}

module.exports = {
  adicionarUsuario,
  buscarUsuarioPorEmail
}