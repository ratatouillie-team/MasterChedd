const eventoModels = require('../models/eventoModels')

async function exibirHome(request, response) {
  // const eventos = await eventoModels.listarEventos()
  // console.log(eventos)
  // const formateEventos = eventos.map(evento => {
  //   return {
  //     nome: evento.nome,
  //     data: evento.data,
  //     local: evento.local
  //   }
  // })

  const logado = request.session.user ? true : false
  const user = request.session.user
  response.render('home', { logado, user })
}


module.exports = { exibirHome }
