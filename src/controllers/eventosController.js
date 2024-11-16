const eventoModels = require('../models/eventoModels')

async function adicionarEventos(request, response) {
  const { nome, data, horario } = request.body
  console.log("Data: ", data)
  const banner = request.file.filename

  await eventoModels.criarEventos(nome, data, horario, banner)

  response.redirect('/administracao')
}


module.exports = {
  adicionarEventos
}