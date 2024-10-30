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
  response.render('home', { logado })
}


module.exports = { exibirHome }
