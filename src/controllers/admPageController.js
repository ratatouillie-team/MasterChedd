const admModels = require('../models/admModels')
const menuModels = require('../models/menuModels')
const eventoModels = require('../models/eventoModels')
const pedidosModels = require('../models/pedidoModels')

async function exibirPaginaAdm(request, response) {
  const pratosMenu = await menuModels.listarTodosOsPratos()
  const eventos = await eventoModels.listarEventos()
  const pratoDoDia = await menuModels.listarPratosDoDia()
  const adm = await admModels.listarAdm()
  const pedidos = await pedidosModels.listarPedidos()
  const usuarios = await admModels.listarUsers()


  const logado = request.session.user ? true : false
  const user = request.session.user

  response.render('admPage', { logado, user, pratosMenu, eventos, pratoDoDia, adm, pedidos, usuarios })
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