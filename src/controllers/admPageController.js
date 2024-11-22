const admModels = require('../models/admModels')
const menuModels = require('../models/menuModels')
const eventoModels = require('../models/eventoModels')

async function exibirPaginaAdm(request, response) {
  const pratosMenu = await menuModels.listarTodosOsPratos()
  const eventos = await eventoModels.listarEventos()
  const pratoDoDia = await menuModels.listarPratosDoDia()
  const adm = await admModels.listarAdm()


  const logado = request.session.user ? true : false
  const user = request.session.user

  response.render('admPage', { logado, user, pratosMenu, eventos, pratoDoDia, adm })
}

async function adicionarPermissao(request, response) {
  const { email, permissao } = request.body

  const atualizarUser = await admModels.atualizarPerm(email, {
    cargo: permissao
  })


  response.redirect('/administracao')
  return atualizarUser
}



module.exports = {
  exibirPaginaAdm,
  adicionarPermissao
}