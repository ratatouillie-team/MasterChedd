const pedidoModels = require('../models/pedidoModels')

async function adicionarEncomenda(request, response) {
  const { pratos } = await request.body
  const user = request.session.user

  if (!pratos || pratos.length === 0) {
    return response.status(400).json({ error: 'Nenhum dado para enviar!' });
  }
  
  try {
    // Criação do pedido no modelo
    const pedidosCriado = await pedidoModels.fazerPedidos(user, pratos);

    // Retorna sucesso com o pedido criado
    response.status(200).json({ message: 'Pedido enviado com sucesso!', pedido: pedidosCriado });

  } catch (error) {
    console.error('Erro ao criar pedido no modelo:', error);
    response.status(500).json({ error: 'Erro ao processar o pedido, tente novamente mais tarde!' });
  }
}

function exibirEncomenda(request, response) {
  response.render('encomenda')
}

module.exports = {
  adicionarEncomenda,
  exibirEncomenda
}
