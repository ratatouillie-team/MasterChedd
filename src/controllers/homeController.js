const eventoModels = require('../models/eventoModels')
const menuModels = require('../models/menuModels')


function avaliarPrato(request, response) {
  const pratoId = parseInt(request.params.id);
  const avaliacao = parseInt(request.body.avaliar);

  const prato = pratos.find(prato => prato.id === pratoId);
  
  if (prato && avaliacao >= 1 && avaliacao <= 5) {
    prato.avaliacao.push(avaliacao);
  }

  console.log(prato.avaliacao);
  response.redirect('/');
}

// const pratos = []


async function exibirHome(request, response) {
  const eventos = await eventoModels.listarEventos()
  const pratos = await menuModels.listarPratosDoDia()


  // const agora = new Date(); // Data e hora atuais

  // const eventosFiltrados = eventos
  //   .filter(evento => new Date(evento.data) >= agora) // Filtra eventos no futuro
  //   .sort((a, b) => new Date(a.data) - new Date(b.data)); // Ordena por data e hora

  // console.log("Filtro de eventos:", eventosFiltrados)


  const logado = request.session.user ? true : false
  const user = request.session.user
  response.render('home', { logado, user, eventos, pratos })
}



module.exports = { exibirHome, avaliarPrato }
