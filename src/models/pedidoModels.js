const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function fazerPedidos(user, pratos) {

  const pedidoCriado = await prisma.pedido.createMany({
    data: pratos.map(prato => ({
      id_usuario: user.id,        
      id_prato: prato.id, 
      nome_prato: prato.nome,    
      data_pedido: new Date(),    
      quantidade: prato.quantidade, 
      total_pedido: calcularTotal([prato]), 
      status_pedido: 'Pendente',
    }))
  });

  // Retorna o pedido criado
  return pedidoCriado;
}


function calcularTotal(pratos) {
  return pratos.reduce((total, prato) => {
    return total + (prato.preco * prato.quantidade);
  }, 0);
}



async function listarPedidos(){
  const pedidos = await prisma.pedido.findMany();
  console.log(pedidos)
  return pedidos
}

module.exports = {
  fazerPedidos,
  listarPedidos
}
