const eventoModels = require('../models/eventoModels')

function exibirCriarEventos(request, response) {
  response.render('criarEventos')
}

async function criarEventos(request, response) {
  const {nome, data, local} = request.body

  await eventoModels.adicionarEventos(nome, data, local)
  response.redirect('/eventos')

} 



module.exports = {
  exibirCriarEventos,
  criarEventos
}