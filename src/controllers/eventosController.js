const eventoModels = require('../models/eventoModels')

function exibirCriarEventos(request, response) {
  response.render('criarEventos')
}

async function exibirEventos(request, response) {
  const eventos = await eventoModels.listarEventos()


  response.render('eventos', { eventos })
}

async function adicionarEventos(request, response) {
  const { nome, data, local } = request.body
  await eventoModels.adicionarEventos(nome, data, local)

  response.redirect('/eventos')
}


module.exports = {
  exibirEventos,
  adicionarEventos,
  exibirCriarEventos
}