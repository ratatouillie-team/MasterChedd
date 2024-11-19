const menuModels = require('../models/menuModels')


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