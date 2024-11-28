const userModels = require('../models/userModels');
const md5 = require('md5');


function exibirLogin(request, response) {
  response.render('login')
}


async function logarUsuario(request, response) {
  const {email, senha} = request.body
  const user = await userModels.buscarUsuarioPorEmail(email)

  if(user == undefined){
    response.redirect('/login');
    return;
  }

  if(md5(senha) !== user.senha){

    response.send('Senha incorreta, tente novamente...');
    return;
  }

  request.session.user = user;
  console.log("Logado com o user:", user.nome)
  response.redirect('/');
}

function deslogarUsuario(request, response) {
  // Remover a sessão do usuário
  request.session.destroy()

  // Redirecionar o usuário para a página de login
  response.redirect('/')
}

module.exports = {exibirLogin, logarUsuario, deslogarUsuario}