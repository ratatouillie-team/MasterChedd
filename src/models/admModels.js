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

async function listarAdm(){

  const adm = await prisma.usuario.findMany({where: {cargo: 'admin'}})

  return adm
}



module.exports = { atualizarPerm, listarAdm }