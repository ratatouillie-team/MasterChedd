const userModels = require('../models/userModels');
const md5 = require('md5');


function exibirLogin(request, response) {
  response.render('login')
}


async function logarUsuario(request, response) {
  const {email, senha} = request.body
  const user = await userModels.buscarUsuarioPorEmail(email)

  if(user == undefined){
    response.render('login');
    return;
  }

  if(md5(senha) !== user.senha){
    response.render('login');
    return;
  }

  response.redirect('/');
}

module.exports = {exibirLogin, logarUsuario}