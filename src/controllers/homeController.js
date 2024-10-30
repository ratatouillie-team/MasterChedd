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
  response.render('home', /*{eventos}*/)
}

module.exports = {exibirHome}
