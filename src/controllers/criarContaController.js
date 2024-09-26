const userModels = require('../models/userModels');

function exibirCriarConta(request, response) {
  response.render('criarConta')
}

async function criarConta(request, response) {
  const {nome, email, senha} = request.body
  
  await userModels.adicionarUsuario(nome, email, senha)
  response.redirect('/login')
}

module.exports = {exibirCriarConta, criarConta}