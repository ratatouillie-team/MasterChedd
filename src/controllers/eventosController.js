const eventoModels = require('../models/eventoModels')

async function adicionarEventos(request, response) {
  const { nome, data, horario } = request.body
  const banner = request.file.filename

  await eventoModels.criarEventos(nome, data, horario, banner)

  response.redirect('/administracao')
}

async function editarEvento(request, response) {
  const { idevento, nome, data, horario } = request.body
  const banner = request.file.filename

  const editarEvento = await eventoModels.editarEventos(idevento, nome, data, horario, banner)
  
  response.redirect('/administracao')
  return editarEvento
}


async function removerEvento(request, response) {
  const { idevento} = request.body

  const deletarEvento = await eventoModels.deletarEventos(idevento)
 
  response.redirect('/administracao')
  return deletarEvento
}


module.exports = {
  adicionarEventos,
  editarEvento,
  removerEvento
}