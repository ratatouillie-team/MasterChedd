const userModels = require('../models/userModels');
const md5 = require('md5');


function exibirLogin(request, response) {
  response.render('login')
}


async function logarUsuario(request, response) {
  console.log("passou no inicio")
  const {email, senha} = request.body
  const user = await userModels.buscarUsuarioPorEmail(email)

  if(user == undefined){
    response.redirect('/login');
    return;
  }
  console.log('passou no if de user')
  if(md5(senha) !== user.senha){
    console.log('passou no if de senha')
    response.redirect('/login');
    return;
  }

  request.session.user = user;

  console.log("passou aqui")
  response.redirect('/');
}

function deslogarUsuario(request, response) {
  // Remover a sessão do usuário
  request.session.destroy()

  // Redirecionar o usuário para a página de login
  response.redirect('/')
}

module.exports = {exibirLogin, logarUsuario, deslogarUsuario}