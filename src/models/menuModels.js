const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


async function criarPrato(nome, descricao, preco, categoria, imagem) {
  console.log('Entrou na função de add o prato!')

  const pratos = await prisma.prato.create({
    data:{
      nome: nome,
      descricao: descricao,
      preco: preco,
      tipo_comida: categoria,
      imagem: imagem
    }
  })
  console.log ("Prato add:", pratos) 
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



module.exports = { criarPrato, listarPratos }