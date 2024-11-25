const menuModels = require('../models/menuModels')


async function exibirMenu(request, response) {
  const pratos = await menuModels.listarPratos();


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

async function editarPrato(request, response) {
  const { idprato, nome, descricao, preco, categoria } = request.body
  const imagem = request.file.filename
  console.log("Imagem:", imagem)

  const editarPrato = await menuModels.editarPrato(idprato, nome, descricao, preco, categoria, imagem)

  response.redirect('/administracao')
  return editarPrato
}

async function removerPrato(request, response) {
  const { idprato } = request.body

  const removerPrato = await menuModels.deletarPrato(idprato)
  
  response.redirect('/administracao')
  return removerPrato
}



async function adicionarPratoDoDia(request, response) {
  const { pratododia1, pratododia2, pratododia3, pratododia4 } = request.body
  const pratoDoDia = await menuModels.adicionarPratoDoDia(pratododia1, pratododia2, pratododia3, pratododia4)

  response.redirect('/administracao')
  return pratoDoDia
}

async function removerPratoDoDia(request, response) {
  const { iddoprato } = request.body
  const pratoDoDia = await menuModels.removerPratoDoDia(iddoprato)

  response.redirect('/administracao')
  return pratoDoDia
}


module.exports = {
  exibirMenu,
  adicionarPrato,
  adicionarPratoDoDia,
  removerPratoDoDia,
  editarPrato,
  removerPrato
}