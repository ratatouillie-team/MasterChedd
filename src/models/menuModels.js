const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function criarPrato(nome, descricao, preco, categoria, imagem) {
  console.log('Entrou na função de add o prato!')

  const pratos = await prisma.prato.create({
    data: {
      nome: nome,
      descricao: descricao,
      preco: preco,
      tipo_comida: categoria,
      imagem: imagem,
      prato_dia: false

    }
  })
  console.log("Prato add:", pratos)
  return pratos
}

async function editarPrato(idprato, nome, descricao, preco, categoria, imagem) {
  const pratos = await prisma.prato.update({
    where:{
      id: parseInt(idprato)
    },
    data:{
      nome: nome,
      descricao: descricao,
      preco: preco,
      tipo_comida: categoria,
      imagem: imagem
    }
  })
  return pratos
}

async function deletarPrato(idprato){
  const pratos = await prisma.prato.delete({
    where: {
      id: parseInt(idprato)
    }
  })
  return pratos
}

async function listarPratos() {
  const [bebidas, comidaJaponesa, entrada, hamburguer, risoto, salada, sobremesa, variedades] = await Promise.all([
    prisma.prato.findMany({ where: { tipo_comida: 'bebida' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'comida_japonesa' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'entrada' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'hamburguer' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'risoto' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'salada' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'sobremesa' } }),
    prisma.prato.findMany({ where: { tipo_comida: 'variedade' } })
  ]);

  return { bebidas, comidaJaponesa, entrada, hamburguer, risoto, salada, sobremesa, variedades };
}

async function listarTodosOsPratos() {
  const pratos = await prisma.prato.findMany()
  return pratos
}



async function listarPratosDoDia() {
  const pratosDoDia = await prisma.prato.findMany({ where: { prato_dia: true } })
  return pratosDoDia
}

async function adicionarPratoDoDia(pratoId1, pratoId2, pratoId3, pratoId4) {
  const [pratoDoDia1, pratoDoDia2, pratoDoDia3, pratoDoDia4] = await Promise.all([
    prisma.prato.updateMany({
      where: { id: parseInt(pratoId1) },
      data: { prato_dia: true }
    }),

    prisma.prato.updateMany({
      where: {
        id: parseInt(pratoId2)
      },
      data: {
        prato_dia: true
      }
    }),

    prisma.prato.updateMany({
      where: {
        id: parseInt(pratoId3)
      },
      data: {
        prato_dia: true
      }
    }),

    prisma.prato.updateMany({
      where: {
        id: parseInt(pratoId4)
      },
      data: {
        prato_dia: true
      }
    })
  ])

  return { pratoDoDia1, pratoDoDia2, pratoDoDia3, pratoDoDia4 }
}

async function removerPratoDoDia(pratoId) {
  const pratoDoDia = await prisma.prato.updateMany({
    where: {
      id: parseInt(pratoId)
    },
    data: {
      prato_dia: false
    }
  })

  return pratoDoDia
}


module.exports = { criarPrato, listarPratos, listarPratosDoDia, adicionarPratoDoDia, removerPratoDoDia, listarTodosOsPratos, editarPrato, deletarPrato }