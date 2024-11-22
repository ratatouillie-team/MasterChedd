const admModels = require('../models/admModels')
const menuModels = require('../models/menuModels')

function exibirPaginaAdm(request, response) {
  const PratosMenu = menuModels.listarTodosOsPratos()


  const logado = request.session.user ? true : false
  const user = request.session.user

  response.render('admPage', { logado, user, PratosMenu })
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