const eventoModels = require('../models/eventoModels')

async function exibirHome(request, response) {
  const eventos = await eventoModels.listarEventos()

  // const agora = new Date(); // Data e hora atuais

  // const eventosFiltrados = eventos
  //   .filter(evento => new Date(evento.data) >= agora) // Filtra eventos no futuro
  //   .sort((a, b) => new Date(a.data) - new Date(b.data)); // Ordena por data e hora

  // console.log("Filtro de eventos:", eventosFiltrados)


  const logado = request.session.user ? true : false
  const user = request.session.user
  response.render('home', { logado, user, eventos })
}


module.exports = { exibirHome }
