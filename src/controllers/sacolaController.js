const db = require('../config/db');

async function adicionarSacola(data_pedido, total_pedido, status_pedido) {   
  await db.query(`INSERT INTO pedido (data_pedido, total_pedido, status_pedido, criadoEm) VALUES ('${data_pedido}', '${total_pedido}', '${status_pedido}', now())`)
  .then(() => {
    console.log('Pedido criado com sucesso!')
  })
  .catch((erro) => {
    console.error('Erro ao inserir dados, ', erro)
  })
}

function exibirSacola(request, response) {
  response.render('pedido')
}

module.exports = {
  adicionarSacola,
  exibirSacola
}