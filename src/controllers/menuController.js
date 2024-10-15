const menuModels = require('../models/menuModels')

function exibirMenu(request, response) {
  response.render('menu')
}

async function criarMenu(request, response) {
  const {nome, preco} = request.body
  await menuModels.adicionarMenu(nome, preco)
  response.redirect('/menu')
  
}

module.exports = {
  exibirMenu,
  criarMenu
}