const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function atualizarPerfil(id, data) {
  const userUpdate = await prisma.usuario.update({
    where: {
      id: id,
    },

    data
  })

  return userUpdate
}

async function atualizarDados(id, data, senhaAtual) {
  
    const userUpdate = await prisma.usuario.update({
      where: {
        id: id,
      },

      data
    })

    return userUpdate
}

module.exports = {
  atualizarPerfil,
  atualizarDados
}