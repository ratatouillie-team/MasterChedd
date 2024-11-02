const eventoModels = require('../models/eventoModels')


function exibirEventos(request, response) {
  response.render('eventos')
}

async function adicionarEventos(request, response) {
  const {nome, data, local} = request.body 
  const eventos = await eventoModels.adicionarEventos(nome, data, local)

  response.render('eventos')
}


module.exports = {
  exibirEventos,
  adicionarEventos
}