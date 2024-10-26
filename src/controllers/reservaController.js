function exibirReserva(request, response) {
    response.render('reserva')
  }


async function adicionarReserva(request, response) {
    const {nome, telefone, data, horario, pessoas} = request.body
    await reservaModels.adicionarReserva(nome, telefone, data, horario, pessoas)
    response.redirect('/reserva')
}

  module.exports = {
    exibirReserva,
    adicionarReserva
}