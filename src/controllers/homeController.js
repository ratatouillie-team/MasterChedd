const eventoModels = require('../models/eventoModels')

async function exibirHome(request, response) {
  const eventos = await eventoModels.listarEventos()
  response.render('home', {eventos})
}

module.exports = {exibirHome}
