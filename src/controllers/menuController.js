const menuModels = require('../models/menuModels')
const pratinhos = [
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
async function exibirMenu(request, response) {
  const pratos = await menuModels.listarPratos();

  console.log('bebidas:', pratos.bebidas)
  console.log('comidaJaponesa:', pratos.comidaJaponesa)
  console.log('entrada:', pratos.entrada)
  console.log('hamburguer:', pratos.hamburguer)
  console.log('risoto:', pratos.risoto)
  console.log('salada:', pratos.salada)
  console.log('sobremesa:', pratos.sobremesa)
  console.log('variedades:', pratos.variedades)

  const logado = request.session.user ? true : false
  const user = request.session.user
    response.render('menu', {
      bebidas: pratos.bebidas,
      comidaJaponesa: pratos.comidaJaponesa,
      entrada: pratos.entrada,
      hamburguer: pratos.hamburguer,
      risoto: pratos.risoto,
      salada: pratos.salada,
      sobremesa: pratos.sobremesa,
      variedades: pratos.variedades,
      pratinhos,
      logado, user
});
}

async function adicionarPrato(request, response) {
  const { nome, descricao, preco, categoria } = request.body
  const imagem = request.file.filename

  await menuModels.criarPrato(nome, descricao, preco, categoria, imagem)
  
  response.redirect('/administracao')
}

module.exports = {
  exibirMenu,
  adicionarPrato
}