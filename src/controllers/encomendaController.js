

function adicionarEncomenda(data_pedido, total_pedido, status_pedido) {  
   
}

function exibirEncomenda(request, response) {
  response.render('encomenda')
}

module.exports = {
  adicionarEncomenda,
  exibirEncomenda
}