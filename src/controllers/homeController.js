const eventoModels = require('../models/eventoModels')

const pratos = [
  {
    id: 1,
    nome: 'Hambúrguer',
    descricao: 'Delicioso hambúrguer com molho especial.',
    preco: 9.99,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdUFIOLbxqbRWXUzJ_dR8Mzaw_vSmpowy7A&s',
    avaliacao: []
  },

  { 
    id: 2,
    nome: 'Pizza',
    descricao: 'Recheada com mussarela, tomate e azeitona.',
    preco: 12.99,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMeKsutTGdZdN5Nc0ylAmBtGFMovnnADsZQ&s',
    avaliacao: []
  },

  {
    id: 3,
    nome: 'Lasanha',
    descricao: 'Deliciosa lasanha preparada com ingredientes variados.',
    preco: 14.99,
    imagem: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/Lasanha_tradicional.webp',
    avaliacao: []
  },

  {
    id: 4,
    nome: 'Sushi',
    descricao: 'Sushi fresco e delicioso.',
    preco: 10.99,
    imagem: 'https://static.wixstatic.com/media/f9b308_1c5f63bb08554629a0bad7ea90247378~mv2.jpg/v1/fill/w_1000,h_665,al_c,q_85,usm_0.66_1.00_0.01/f9b308_1c5f63bb08554629a0bad7ea90247378~mv2.jpg',
    avaliacao: []
  }
]

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




async function exibirHome(request, response) {
  const eventos = await eventoModels.listarEventos()

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
