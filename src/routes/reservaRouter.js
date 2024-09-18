const express =  require('express')
const reservaController = require('../controllers/reservaController')

const router = express.Router()

router.get("/reserva", reservaController.exibirReserva)

module.exports = router