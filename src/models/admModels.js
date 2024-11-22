const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function atualizarPerm(email, data) {

  const userUpdate = await prisma.usuario.update({
    where: {
      email: email,
    },

    data
  })

  return userUpdate


}



module.exports = { atualizarPerm }