const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function fazerPedidos(user, pratos) {
  for (const prato of pratos) {
    // Verificar se já existe um pedido para o usuário e o prato
    const pedidoExistente = await prisma.pedido.findFirst({
      where: {
        id_usuario: user.id,
        id_prato: prato.id,
        status_pedido: 'Pendente', // Opcional: verifica apenas pedidos pendentes
      },
    });

    if (pedidoExistente) {
      // Atualizar o pedido existente
      await prisma.pedido.update({
        where: { id: pedidoExistente.id },
        data: {
          quantidade: pedidoExistente.quantidade + (prato.quantidade || 1), // Soma as quantidades
          total_pedido: pedidoExistente.total_pedido + calcularTotal([prato]), // Atualiza o total
          data_pedido: new Date(), // Atualiza a data do pedido
        },
      });
    } else {
      // Criar um novo pedido
      await prisma.pedido.create({
        data: {
          id_usuario: user.id,
          id_prato: prato.id,
          nome_prato: prato.nome,
          quantidade: prato.quantidade || 1,
          total_pedido: calcularTotal([prato]),
          status_pedido: 'Pendente',
        },
      });
    }
  }

  return { message: 'Pedidos processados com sucesso!' };
}



function calcularTotal(pratos) {
  return pratos.reduce((total, prato) => {
    const preco = parseFloat(prato.preco) || 0; // Garante que o preço é um número ou 0
    const quantidade = prato.quantidade || 1; // Quantidade padrão é 1
    console.log('Preço:', preco, 'Quantidade:', quantidade);

    return total + (quantidade * preco);
  }, 0);
}




async function listarPedidos() {
  const pedidos = await prisma.pedido.findMany();
  return pedidos
}

module.exports = {
  fazerPedidos,
  listarPedidos
}
